import { Box, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'
import { useGetProjectsProjectId } from '../../../../common/queries'
import { MarkdownWrapper } from '../../../docs/MarkdownWrapper'

export const DetailsOverview = () => {
    const router = useRouter()
    const { id } = router.query
    const { data } = useGetProjectsProjectId(id as string)
    const markdown = data?.data.detailedDescription ?? ''
    const markdownWithLineBreaks = markdown.replace(/\\n/gi, ' \n')

    return (
        <Paper sx={{ height: '100%', width: '100%' }}>
            <Box display="flex" height="100%" px={4}>
                <MarkdownWrapper
                    markdown={markdownWithLineBreaks}
                ></MarkdownWrapper>
            </Box>
        </Paper>
    )
}
