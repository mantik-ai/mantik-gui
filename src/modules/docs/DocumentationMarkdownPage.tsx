import { useTheme } from '@emotion/react'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { fileTreeNode } from '../../pages/docs/[...subroute]'
import { MarkdownWrapper } from './MarkdownWrapper'
type DocsProps = {
    docFileTree: fileTreeNode[]
    routepath: string | string[] | undefined
}

const getMarkdownContent = (props: DocsProps): string => {
    if (!props.routepath) {
        return ''
    }
    if (props.routepath.length === 1) {
        const filetreeNode = props.docFileTree.find((node) => {
            return node.filename == props.routepath?.[0]
        })
        return filetreeNode?.markdown ?? ''
    }
    if (props.routepath.length === 2) {
        const filetreeDirNode = props.docFileTree.find((node) => {
            return node.dirname == props.routepath?.[0]
        })

        const file = filetreeDirNode?.dir.find((node) => {
            return node.filename == props.routepath?.[1]
        })

        return file?.markdown ?? ''
    }
    return ''
}
export const DocumentationMarkdownPage = (props: DocsProps) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                flex: 1,
                p: theme.spacing(2),
            }}
        >
            <Paper sx={{ height: '100%', p: theme.spacing(2) }}>
                <MarkdownWrapper
                    markdown={getMarkdownContent(props)}
                ></MarkdownWrapper>
            </Paper>
        </Box>
    )
}
