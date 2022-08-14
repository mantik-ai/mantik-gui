import { TableCell, TableRow } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import {
    GetProjectsProjectIdData200,
    useGetProjectsProjectIdData,
} from '../../../common/queries'
import { DetailsTable } from '../common/DetailsTable'

export const DetailsDataTable = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <DetailsTable
            id={Number(id)}
            queryHook={useGetProjectsProjectIdData}
            tableHead={['Description']}
        >
            {(data: GetProjectsProjectIdData200 | undefined) => (
                <>
                    {data?.dataRepositories?.map((repo) => {
                        return (
                            <TableRow key={repo.uri}>
                                <TableCell>{repo.description}</TableCell>
                            </TableRow>
                        )
                    })}
                </>
            )}
        </DetailsTable>
    )
}
