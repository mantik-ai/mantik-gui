import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import { useGetProjectsProjectIdCode } from '../../../common/queries'
import { CodeRepositoryCard } from './CodeRepositoryCard'

export const CodeRepositoryOverview = (props: {}) => {
    const router = useRouter()
    const { id } = router.query
    const { data, status } = useGetProjectsProjectIdCode(
        Number(typeof id === 'string' ? 1234 : id)
    )
    return (
        <DataStateIndicator status={status} text="Loading Repositories...">
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {data?.data.codeRepositories?.map((repo) => (
                    <CodeRepositoryCard
                        codeRepository={repo}
                    ></CodeRepositoryCard>
                ))}
            </Box>
        </DataStateIndicator>
    )
}
