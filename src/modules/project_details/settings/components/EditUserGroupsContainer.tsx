import {
    Collapse,
    IconButton,
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
//@Todo change useGetUsers to useGetUserGroupsSearch
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import {
    ProjectUserGroupsItem,
    useGetGroups,
    User,
    UserGroup,
} from '../../../../common/queries'
import ProjectSettingsContext from '../contexts/ProjectSettingsContext'
import EditButton from './EditButton'
import { CollaborationDialog } from './CollaborationDialog'

function Row({
    name,
    admin,
    allowedToEdit,
    members,
    onPermissionChange,
}: {
    name: string
    admin: string
    allowedToEdit: boolean
    members: User[]
    onPermissionChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell>
                    <b>{name}</b>
                </TableCell>
                <TableCell>{admin}</TableCell>
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
            {members.map((member, index) => (
                <TableRow key={`subrow-${index}`}>
                    <TableCell
                        style={{
                            paddingBottom: 0,
                            paddingTop: 0,
                            borderBottomWidth: open ? '1px' : 0,
                        }}
                        colSpan={4}
                    >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <TableCell
                                sx={{
                                    borderBottom: 'unset',
                                    minWidth: '175px',
                                }}
                            >
                                {member.name}
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ borderBottom: 'unset' }}
                            >
                                {member.email}
                            </TableCell>
                        </Collapse>
                    </TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default function EditUserGroupsContainer() {
    const context = useContext(ProjectSettingsContext)
    const [isOpen, setIsOpen] = React.useState(false)
    const [userGroups, setUserGroups] = React.useState<ProjectUserGroupsItem[]>(
        []
    )

    useEffect(() => {
        if (context.settings) {
            setUserGroups(context.settings.userGroups ?? [])
        }
    }, [context.settings])

    return (
        <div>
            <Typography variant={'h5'}>Usergroups</Typography>
            <Stack
                direction="row"
                alignItems="top"
                justifyContent="space-between"
            >
                <TableContainer component={Paper} sx={{ mt: 4, mr: -5 }}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Group Name</TableCell>
                                <TableCell>Administrator</TableCell>
                                <TableCell align={'center'}>
                                    Permission
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userGroups.map((row, index) => {
                                return (
                                    <Row
                                        key={`group-row-${index}`}
                                        allowedToEdit={
                                            row.allowedToEdit ?? false
                                        }
                                        name={row.userGroup?.name ?? ''}
                                        admin={row.userGroup?.admin.name ?? ''}
                                        members={row.userGroup?.members ?? []}
                                        onPermissionChange={(e) => {
                                            setUserGroups((prev) => {
                                                const copy = [...prev]
                                                const item = { ...prev[index] }
                                                item.allowedToEdit =
                                                    e.target.checked
                                                copy[index] = item
                                                context.setUserGroups!(copy)
                                                return copy
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
                title={'Edit Usergroups'}
                message={'Add or remove usergroups and edit their permissions.'}
                open={isOpen}
                multiple={true}
                onClose={() => setIsOpen(false)}
                onSave={(groups) => {
                    //remove groups from state that are not in the new list
                    setUserGroups((prev) => {
                        const copy = [...prev]
                        const newGroups = copy.filter((group) => {
                            return (groups as UserGroup[]).some(
                                (g) =>
                                    g.userGroupId ===
                                    group.userGroup?.userGroupId
                            )
                        })
                        context.setUserGroups!(newGroups)
                        return newGroups
                    })

                    //add groups to state that are not in the old list
                    setUserGroups((prev) => {
                        const copy = [...prev]
                        const newGroups = (groups as UserGroup[]).filter(
                            (group) => {
                                return !prev.some(
                                    (g) =>
                                        g.userGroup?.userGroupId ===
                                        group.userGroupId
                                )
                            }
                        )
                        newGroups.forEach((group) => {
                            copy.push({
                                userGroup: group,
                                allowedToEdit: false,
                            })
                        })
                        context.setUserGroups!(copy)
                        return copy
                    })
                }}
                queryHook={useGetGroups}
                autocompleteSelector={(group: UserGroup) => group.name}
                //@ts-expect-error wip
                autocompleteOptions={(option) => option?.data.userGroups ?? []}
                defaultValue={userGroups.map((item) => item.userGroup!)}
            />
        </div>
    )
}
