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
import { useGetProjectsProjectIdRuns } from '../../../common/queries'

interface DetailsRunsTableProps {}
export const DetailsRunsTable = (props: DetailsRunsTableProps) => {
    const router = useRouter()
    const { id } = router.query
    const { data, error } = useGetProjectsProjectIdRuns(
        Number(typeof id === 'string' ? 1234 : id)
    )

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
                                <TableCell>
                                    {run.modelRepository?.uri}
                                </TableCell>
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
        </DataStateIndicator>
    )
}
