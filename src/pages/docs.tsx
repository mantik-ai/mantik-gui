import { Box, useTheme } from '@mui/material'
import { NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import { DocumentationMarkdownPage } from '../modules/docs/DocumentationMarkdownPage'
import { DocumentationSideBar } from '../modules/docs/DocumentationSideBar'
import { PageHeading } from '../modules/projects_overview/components/SearchHeading'
import { Field } from 'formik'

export type fileTreeNode =
    | { filename: string; dirname: never; dir: never }
    | { filename: never; dirname: string; dir: fileTreeNode[] }

const Docs: NextPage = (props) => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                m: theme.spacing(4),
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <PageHeading description="Search through the documentation of this project.">
                Documentation
            </PageHeading>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box flex={1}>
                    <DocumentationSideBar
                        docFileTree={props.docFileTree}
                    ></DocumentationSideBar>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: {
                            sx: theme.spacing(2),
                            md: theme.spacing(4),
                        },
                    }}
                    flex={3}
                    color={'blue'}
                >
                    <DocumentationMarkdownPage
                        docFileTree={props.docFileTree}
                    ></DocumentationMarkdownPage>
                </Box>
            </Box>
        </Box>
    )
}

export async function getStaticProps() {
    const getFileTree = (pathstring: string): fileTreeNode[] => {
        const fullpath = path.resolve('./public', pathstring)
        const filetree = fs.readdirSync(fullpath, { withFileTypes: true })
        if (filetree.length == 0) ''

        const tree = filetree.map((item) => {
            if (item.isFile()) {
                return { filename: item.name } as fileTreeNode
            } else if (item.isDirectory()) {
                return {
                    dirname: item.name,
                    dir: getFileTree(`${pathstring}/${item.name}`),
                } as fileTreeNode
            }
            return { filename: item.name } as fileTreeNode
        })

        return tree
    }
    const docFileTree = getFileTree('doc')
    return {
        props: {
            docFileTree,
        },
    }
}

export default Docs
