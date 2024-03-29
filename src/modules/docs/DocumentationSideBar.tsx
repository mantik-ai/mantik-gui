import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    Paper,
    useTheme
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { fileTreeNode } from "../../pages/docs/[...subroute]";
import { DocumentationAccordion } from "./DocumentationAccordion";

type DocSideBarProps = { docFileTree: fileTreeNode[] }

export const DocumentationSideBar = (props: DocSideBarProps) => {
    return (
        <Box
            sx={{
                flex: 1,
                pt: 4
            }}
        >
            <Paper sx={{ height: "100%" }}>
                <List sx={{ height: "100%" }}>
                    {props.docFileTree.map((node) => {
                        if (node.filename) {
                            return (
                                <Link
                                    key={`${node.path}/${node.filename}`}
                                    href={`/${node.path}/${node.filename}`}
                                >
                                    <ListItemButton key={node.filename}>
                                        <ListItemText>
                                            {`${node.name}`}
                                        </ListItemText>
                                    </ListItemButton>
                                </Link>
                            );
                        }
                        if (node.dirname) {
                            return (
                                <DocumentationAccordion
                                    itemName={node.name}
                                    key={`${node.path}/${node.dirname}`}
                                    routes={node.dir.map((dirnode) => {
                                        return {
                                            name: dirnode.name,
                                            path: `/${dirnode.path}/${dirnode.filename}`,
                                            key: `${dirnode.path}/${dirnode.filename}`
                                        };
                                    })}
                                ></DocumentationAccordion>
                            );
                        }
                        return <></>;
                    })}
                </List>
            </Paper>
        </Box>
    );
};
