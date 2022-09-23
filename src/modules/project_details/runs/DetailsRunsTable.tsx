import {
    Button,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    useTheme,
} from '@mui/material'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import { Spacing } from '../../../common/components/Spacing'
import { Run, useGetProjectsProjectIdRuns } from '../../../common/queries'
import RunDialogContext from './contexts/RunDialogContext'
import { RunDialog } from './RunDialog'
import { DetailsToolbar } from '../../../common/components/DetailsToolbar'
import { Add } from '@mui/icons-material'

const PageLengthOptions = [50, 25, 10, 5]

export const DetailsRunsTable = () => {
    const theme = useTheme()
    const router = useRouter()
    const { id } = router.query
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(PageLengthOptions[0])
    const { data, status } = useGetProjectsProjectIdRuns(id as string, {
        pagelength: rowsPerPage,
        startindex: page,
    })

    console.log(data)

    const [openRunDialog, setOpenRunDialog] = React.useState(false)
    const runContext = useContext(RunDialogContext)

    const openDialog = (run?: Run) => {
        setOpenRunDialog(true)
        if (run) runContext.setRun!(run)
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    return (
        <DataStateIndicator status={status} text="Loading Runs..." usePaper>
            <DetailsToolbar
                title="Runs"
                tool={
                    <Button variant="text" onClick={() => openDialog()}>
                        <Add></Add>Add
                    </Button>
                }
            />
            <Spacing value={theme.spacing(1)}></Spacing>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Experiment</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Dataset</TableCell>
                            <TableCell>Infrastructure</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data.runs?.map((run) => (
                            <TableRow key={run.run_id}>
                                <TableCell>
                                    <Link
                                        href={
                                            run.experimentRepository
                                                ?.artifact_location
                                        }
                                    >
                                        {run.experimentRepository?.name}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {run.modelRepository?.uri}
                                </TableCell>
                                <TableCell>
                                    {run.dataRepository?.dataRepositoryId}
                                </TableCell>
                                <TableCell>
                                    {run.connections?.connectionName}
                                </TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="outlined"
                                        sx={{ mx: 0.5 }}
                                        onClick={() => openDialog(run)}
                                    >
                                        Re-run
                                    </Button>
                                    <Button variant="outlined" sx={{ mx: 0.5 }}>
                                        Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={PageLengthOptions}
                    component="div"
                    count={data?.data.totalrecords ?? 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <RunDialog
                projectId={''} //TODO: set programmatically after api-spec fix
                open={openRunDialog}
                setOpen={setOpenRunDialog}
            ></RunDialog>
        </DataStateIndicator>
    )
}
