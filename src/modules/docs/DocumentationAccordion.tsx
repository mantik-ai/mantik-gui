import React from 'react'
import { ExpandMore } from '@mui/icons-material'
import {
    AccordionDetails,
    AccordionSummary,
    Link,
    List,
    ListItemButton,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import { useRouter } from 'next/router'
import { Route } from '../../common/types/route'
export type DocAccordionProps = { itemName: string; routes?: Route[] }
export const DocumentationAccordion = (props: DocAccordionProps) => {
    const router = useRouter()
    const activeRoute = router.pathname.split('/').at(-1)
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
        }

    return (
        <Accordion
            sx={{
                '&:before': {
                    display: 'none',
                },
            }}
            disableGutters
            elevation={0}
            expanded={expanded === 'settings'}
            onChange={handleChange('settings')}
        >
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Stack direction={'row'}>
                    <Typography color={'#252525'}>{props.itemName}</Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {props.routes?.map((route) => (
                        <Link key={route.name} href={route.path}>
                            <ListItemButton
                                key={route.path}
                                selected={
                                    route.name.toLowerCase() === activeRoute ||
                                    (activeRoute === '[id]' &&
                                        route.name === 'Overview')
                                }
                            >
                                <Typography
                                    sx={{
                                        color: '#808080',
                                        marginRight: '24px',
                                        marginLeft: '20px',
                                    }}
                                ></Typography>
                                <ListItemText>{route.name}</ListItemText>
                            </ListItemButton>
                        </Link>
                    ))}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}
