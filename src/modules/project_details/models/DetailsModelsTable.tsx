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
import { DetailsToolbar } from '../../../common/components/DetailsToolbar'
import { LabelArray } from '../../../common/components/LabelArray'
import { Spacing } from '../../../common/components/Spacing'
import { useGetProjectsProjectIdModels } from '../../../common/queries'

const PageLengthOptions = [50, 25, 10, 5]

export const DetailsModelsTable = () => {
    const theme = useTheme()
    const router = useRouter()
    const { id } = router.query
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(PageLengthOptions[0])
    const { data, status } = useGetProjectsProjectIdModels(id as string, {
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
            <DetailsToolbar title={'Models'} tool={<></>}></DetailsToolbar>
            <Spacing value={theme.spacing(1)}></Spacing>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Commit</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Labels</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data.modelRepositories?.map((modelRepo) => (
                            <TableRow key={modelRepo.commit}>
                                <TableCell>
                                    <Link href={modelRepo.uri}>
                                        {modelRepo.commit}
                                    </Link>
                                </TableCell>
                                <TableCell>{modelRepo.description}</TableCell>
                                <TableCell>
                                    <LabelArray
                                        labels={modelRepo.labels}
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
