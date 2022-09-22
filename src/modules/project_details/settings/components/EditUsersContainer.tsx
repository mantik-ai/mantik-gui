import {
    Paper,
    Stack,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import * as React from 'react'
import { useContext, useEffect } from 'react'
//@Todo change useGetUsers to useGetUserSearch
import {
    ProjectMembersItem,
    useGetUsers,
    User,
} from '../../../../common/queries'
import ProjectSettingsContext from '../contexts/ProjectSettingsContext'
import EditButton from './EditButton'
import { CollaborationDialog } from './CollaborationDialog'

function Row({
    name,
    email,
    allowedToEdit,
    onPermissionChange,
}: {
    name: string
    email: string
    allowedToEdit: boolean
    onPermissionChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <b>{name}</b>
                </TableCell>
                <TableCell>{email}</TableCell>
                <TableCell align="center">
                    <Stack
                        direction="row"
                        spacing={1}
                        mt={1}
                        alignItems="center"
                        justifyContent={'center'}
                    >
                        <Typography>read</Typography>
                        <Switch
                            color="primary"
                            defaultChecked={allowedToEdit}
                            onChange={onPermissionChange}
                        />
                        <Typography>write</Typography>
                    </Stack>
                </TableCell>
            </TableRow>
        </>
    )
}

export default function EditUserContainer() {
    const context = useContext(ProjectSettingsContext)
    const [isOpen, setIsOpen] = React.useState(false)
    const [members, setMembers] = React.useState<ProjectMembersItem[]>([])

    useEffect(() => {
        if (context.settings) {
            setMembers(context.settings.members ?? [])
        }
    }, [context.settings])

    return (
        <div>
            <Typography variant={'h5'}>Members</Typography>
            <Stack
                direction="row"
                alignItems="top"
                justifyContent="space-between"
            >
                <TableContainer component={Paper} sx={{ mt: 4, mr: -4 }}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell>User Name</TableCell>
                                <TableCell>E-Mail</TableCell>
                                <TableCell align={'center'}>
                                    Permission
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {members.map((row, index) => {
                                return (
                                    <Row
                                        key={`member-row-${index}`}
                                        allowedToEdit={
                                            row.allowedToEdit ?? false
                                        }
                                        name={row.user?.name ?? ''}
                                        email={row.user?.email ?? ''}
                                        onPermissionChange={(e) => {
                                            setMembers((prev) => {
                                                prev[index].allowedToEdit =
                                                    e.target.checked
                                                return [...prev]
                                            })
                                        }}
                                    />
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <EditButton onEdit={() => setIsOpen(true)} />
            </Stack>
            <CollaborationDialog
                title={'Edit Members'}
                message={'Add or remove member and edit their permissions.'}
                open={isOpen}
                multiple={true}
                onClose={() => setIsOpen(false)}
                onSave={(users) => {
                    //remove users from state that are not in the new list
                    setMembers((prev) => {
                        const copy = [...prev]
                        const newUsers = copy.filter((u) => {
                            return (users as User[]).find((user) => {
                                return user.userId === u.user?.userId
                            })
                        })
                        context.setMembers!(newUsers)
                        return newUsers
                    })

                    //add users to state that are not in the old list
                    setMembers((prev) => {
                        const copy = [...prev]
                        const newUsers = (users as User[]).filter((user) => {
                            return !prev.some((u) => {
                                return u.user?.userId === user.userId
                            })
                        })
                        newUsers.forEach((user) => {
                            copy.push({
                                user,
                                allowedToEdit: false,
                            })
                        })
                        context.setMembers!(copy)
                        return copy
                    })
                }}
                queryHook={useGetUsers}
                autocompleteSelector={(user: User) => user.name}
                //@ts-expect-error wip
                autocompleteOptions={(option) => option?.data.users ?? []}
                defaultValue={members.map((item) => item.user!)}
            />
        </div>
    )
}
