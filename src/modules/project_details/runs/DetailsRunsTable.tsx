import {
    Button,
    CircularProgress,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useGetProjectsProjectIdRuns } from '../../../common/queries'

interface DetailsRunsTableProps {}
export const DetailsRunsTable = (props: DetailsRunsTableProps) => {
    const router = useRouter()
    const { id } = router.query
    const { data, error } = useGetProjectsProjectIdRuns(Number(id))
    if (!data) {
        return (
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                {error ? (
                    <Typography variant="body1">Error</Typography>
                ) : (
                    <>
                        <Typography variant="body1">Loading Runs...</Typography>
                        <CircularProgress />
                    </>
                )}
            </Paper>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Experiments</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell>Connection</TableCell>
                        <TableCell></TableCell>
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
                            <TableCell>{run.modelRepository?.uri}</TableCell>
                            <TableCell>
                                {run.dataRepository?.dataRepositoryId}
                            </TableCell>
                            <TableCell>
                                {run.connections?.connectionName}
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined">Details</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
