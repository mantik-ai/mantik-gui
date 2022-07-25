import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import React from 'react'

interface DetailsRunsTableProps {}
export const DetailsRunsTable = (props: DetailsRunsTableProps) => {
    // const {} = useGetProjectsProjectIdRu
    const rows = [{ run: '' }]
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Run</TableCell>
                        <TableCell>Experiments</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody></TableBody>
            </Table>
        </TableContainer>
    )
}
