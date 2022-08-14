import { TableCell, TableRow } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import {
    GetProjectsProjectIdModels200,
    useGetProjectsProjectIdModels,
} from '../../../common/queries'
import { DetailsTable } from '../common/DetailsTable'

export const DetailsModelTable = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <DetailsTable
            id={Number(id)}
            queryHook={useGetProjectsProjectIdModels}
            tableHead={['URI', 'Description']}
        >
            {(data: GetProjectsProjectIdModels200 | undefined) => (
                <>
                    {data?.models?.map((model) => {
                        return (
                            <TableRow key={model.uri}>
                                <TableCell>{model.uri}</TableCell>
                                <TableCell>{model.description}</TableCell>
                            </TableRow>
                        )
                    })}
                </>
            )}
        </DetailsTable>
    )
}
