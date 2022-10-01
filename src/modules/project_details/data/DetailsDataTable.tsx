import {
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
import React from 'react'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import { LabelArray } from '../../../common/components/LabelArray'
import { Spacing } from '../../../common/components/Spacing'
import { useGetProjectsProjectIdData } from '../../../common/queries'

const PageLengthOptions = [50, 25, 10, 5]

export const DetailsDataTable = () => {
    const theme = useTheme()
    const router = useRouter()
    const { id } = router.query
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(PageLengthOptions[0])
    const { data, status } = useGetProjectsProjectIdData(id as string, {
        pagelength: rowsPerPage,
        startindex: page,
    })

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
            <Spacing value={theme.spacing(1)}></Spacing>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Labels</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data.dataRepositories?.map((dataRepo) => (
                            <TableRow key={dataRepo.dataRepositoryId}>
                                <TableCell>
                                    <Link href={dataRepo.uri}>
                                        {dataRepo.dataRepositoryName}
                                    </Link>
                                </TableCell>
                                <TableCell>{dataRepo.description}</TableCell>
                                <TableCell>
                                    <LabelArray
                                        labels={dataRepo.labels}
                                    ></LabelArray>
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
        </DataStateIndicator>
    )
}
