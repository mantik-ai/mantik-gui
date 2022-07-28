import {
    Button,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import { Run, useGetProjectsProjectIdRuns } from '../../../common/queries'
import { RunRepeatDialog } from './RunRepeatDialog'

interface DetailsRunsTableProps {}
export const DetailsRunsTable = (props: DetailsRunsTableProps) => {
    const router = useRouter()
    const { id } = router.query
    const { data, error } = useGetProjectsProjectIdRuns(
        Number(typeof id === 'number' ? id : 1234)
    )

    const [openReRunDialog, setOpenReRunDialog] = React.useState(false)
    const [currentRun, setCurrentRun] = React.useState<Run>({})

    const openDialog = (run: Run) => {
        setOpenReRunDialog(true)
        setCurrentRun(run)
    }

    return (
        <DataStateIndicator
            data={data}
            error={error}
            text="Loading Runs..."
            usePaper
        >
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Experiment</TableCell>
                            <TableCell>Code</TableCell>
                            <TableCell>Data</TableCell>
                            <TableCell>Connection</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data.runs?.map((run) => (
                            <TableRow key={run.timestamp}>
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
                                        onClick={() => openDialog(run)}
                                    >
                                        Re-run
                                    </Button>
                                    <Button variant="outlined">Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <RunRepeatDialog
                run={currentRun}
                open={openReRunDialog}
                setOpen={setOpenReRunDialog}
            ></RunRepeatDialog>
        </DataStateIndicator>
    )
}
