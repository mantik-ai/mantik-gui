import fs from 'fs'
import path from 'path'
import { Box, useTheme } from '@mui/material'
import { GetStaticPaths, NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageHeading } from '../../modules/projects_overview/components/SearchHeading'
import { DocumentationSideBar } from '../../modules/docs/DocumentationSideBar'
import { DocumentationMarkdownPage } from '../../modules/docs/DocumentationMarkdownPage'
import { readFile } from 'fs/promises'

const DOC_DIRECTORY = './src'
const DOC_FOLDER_NAME = 'docs'

export type fileTreeNode =
    | {
          filename: string
          markdown: string
          name: string
          path: string
          dirname: never
          dir: never
      }
    | {
          filename: never
          markdown: never
          name: string
          path: string
          dirname: string
          dir: fileTreeNode[]
      }

type DocsPageProps = { docFileTree: fileTreeNode[] }
const Docs: NextPage<DocsPageProps> = (props: DocsPageProps) => {
    const theme = useTheme()
    const router = useRouter()
    const subroute = router.query.subroute
    return (
        <Box
            sx={{
                m: theme.spacing(4),
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <PageHeading description="Read the documentation of this project.">
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
                        p: 4
                    }}
                    flex={3}
                    color={'blue'}
                >
                    <DocumentationMarkdownPage
                        docFileTree={props.docFileTree}
                        routepath={subroute}
                    ></DocumentationMarkdownPage>
                </Box>
            </Box>
        </Box>
    )
}

const convertFilenameToName = (filename: string) => {
    const name = filename.split('_').join(' ').split('.')[0]
    return name
}

export async function getStaticProps() {
    const getFileTree = async (pathstring: string): Promise<fileTreeNode[]> => {
        const fullpath = path.resolve(DOC_DIRECTORY, pathstring)
        const filetree = fs.readdirSync(fullpath, { withFileTypes: true })
        if (filetree.length == 0) ''

        const tree = await Promise.all(
            filetree.map(async (item) => {
                if (item.isFile()) {
                    const markdownFile = await readFile(
                        `${fullpath}/${item.name}`,
                        'utf8'
                    )
                    return {
                        filename: item.name,
                        name: convertFilenameToName(item.name),
                        path: pathstring,
                        markdown: markdownFile,
                    } as fileTreeNode
                } else if (item.isDirectory()) {
                    return {
                        name: convertFilenameToName(item.name),
                        path: pathstring,
                        dirname: item.name,
                        dir: await getFileTree(`${pathstring}/${item.name}`),
                    } as fileTreeNode
                }
                return {
                    name: '',
                    filename: item.name,
                    path: pathstring,

                    markdown: '',
                } as fileTreeNode
            })
        )

        return tree
    }
    const docFileTree = await getFileTree(DOC_FOLDER_NAME)

    return {
        props: {
            docFileTree,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: string[] = []

    const getPaths = (pathstring: string) => {
        const fullpath = path.resolve(DOC_DIRECTORY, pathstring)
        const filetree = fs.readdirSync(fullpath, { withFileTypes: true })
        if (filetree.length == 0) ''

        filetree.map(async (item) => {
            if (item.isFile()) {
                paths.push(`${pathstring}/${item.name}`)
            } else if (item.isDirectory()) {
                getPaths(`${pathstring}/${item.name}`)
            }
        })
    }
    getPaths(DOC_FOLDER_NAME)

    const querypaths = paths.map((p) => {
        return {
            params: {
                subroute: p.split('/').slice(1),
            },
        }
    })

    if (querypaths.length <= 0) {
        throw new Error('Documentation not found')
    }

    return {
        paths: querypaths,
        fallback: 'blocking', //indicates the type of fallback
    }
}

export default Docs
