import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemText,
    Paper,
    useTheme,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { fileTreeNode } from '../../pages/docs'
import { DocumentationAccordion } from './DocumentationAccordion'

type DocSideBarProps = { docFileTree: fileTreeNode[] }

export const DocumentationSideBar = (props: DocSideBarProps) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                flex: 1,
                p: theme.spacing(2),
            }}
        >
            <Paper sx={{ height: '100%' }}>
                <List sx={{ height: '100%' }}>
                    {props.docFileTree.map((node) => {
                        if (node.filename) {
                            return (
                                <Link
                                    key={node.filename}
                                    href={`/projects/details/${node.filename}`}
                                >
                                    <ListItemButton key={node.filename}>
                                        <ListItemText>
                                            {node.filename}
                                        </ListItemText>
                                    </ListItemButton>
                                </Link>
                            )
                        }
                        if (node.dirname) {
                            return (
                                <>
                                    <DocumentationAccordion
                                        itemName={node.dirname}
                                        key={node.dirname}
                                        routes={node.dir.map((r) => {
                                            return {
                                                name: r.filename,
                                                path: '',
                                            }
                                        })}
                                    ></DocumentationAccordion>
                                    <Divider />
                                </>
                            )
                        }
                        return <></>
                    })}
                    <Divider />
                </List>
            </Paper>
        </Box>
    )
}
