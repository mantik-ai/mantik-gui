import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material'
import { AxiosResponse } from 'axios'
import React from 'react'
import { QueryKey, UseQueryResult } from 'react-query'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import { PaginationResponse } from '../../../common/queries'

interface DetailsTableProps<TRes> {
    id: number
    queryHook: (
        projectId: number,
        params?: {
            startindex?: number
            pagelength?: number
        }
    ) => UseQueryResult<AxiosResponse<TRes>> & { queryKey: QueryKey }

    tableHead: string[]
    children: (entry: TRes | undefined) => React.ReactNode
}

const PageLengthOptions = [50, 25, 10, 5]

export const DetailsTable = <TRes extends PaginationResponse>(
    props: DetailsTableProps<TRes>
) => {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(PageLengthOptions[0])
    const { data, status } = props.queryHook(props.id, {
        pagelength: rowsPerPage,
        startindex: page,
    })

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    return (
        <DataStateIndicator status={status} text="Loading..." usePaper>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {props.tableHead.map((head) => (
                                <TableCell key={head}>{head}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>{props.children(data?.data)}</TableBody>
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
        </DataStateIndicator>
    )
}
