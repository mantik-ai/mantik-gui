import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import { useGetProjectsProjectIdCode } from '../../../common/queries'
import { DetailsToolbar } from '../../../common/components/DetailsToolbar'
import { CodeRepositoryCard } from './CodeRepositoryCard'

export const CodeRepositoriesOverview = () => {
    const router = useRouter()
    const { id } = router.query
    const { data, status } = useGetProjectsProjectIdCode(id as string)
    return (
        <>
            <DetailsToolbar title={'Code'} tool={<></>}></DetailsToolbar>
            <DataStateIndicator status={status} text="Loading Repositories...">
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {data?.data.codeRepositories?.map((repo) => (
                        <CodeRepositoryCard
                            key={repo.uri}
                            codeRepository={repo}
                        />
                    ))}
                </Box>
            </DataStateIndicator>
        </>
    )
}
