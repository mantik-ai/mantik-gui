import React from 'react'
import {
    Collapse,
    List,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Route } from '../../common/types/route'
import SideBarItem from '../project_details/overview/components/SideBarItem'
export type DocAccordionProps = { itemName: string; routes?: Route[] }
export const DocumentationAccordion = (props: DocAccordionProps) => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={props.itemName} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.routes?.map((route) => (
                        <SideBarItem
                            key={route.path}
                            name={route.name}
                            icon={<></>}
                            path={route.path}
                        />
                    ))}
                </List>
            </Collapse>
        </>
    )
}
