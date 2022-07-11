import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Link as MUILink,
    List,
    TextField,
    Typography,
    useTheme,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Spacing } from '../../../common/components/Spacing'

export const SearchSideBar = () => {
    const theme = useTheme()
    const problemType = ['Regression', 'Classification']
    const sharedProjects: { name: string; id: string }[] = [
        { name: 'Wind-power output regression', id: 'asdffads' },
        {
            name: 'renewable energy sentiment analysis for the german population',
            id: 'gffdsafdsf',
        },
    ]

    return (
        <Box sx={{ pl: theme.spacing(0.5) }}>
            <List>
                <FormControl fullWidth>
                    <TextField
                        id="outlined-basic"
                        label="Search
                        "
                        variant="outlined"
                    />
                    <Spacing value={theme.spacing(4)}></Spacing>

                    <Typography variant="caption">Problem Type</Typography>
                    <FormGroup>
                        {problemType.map((text, _) => (
                            <FormControlLabel
                                control={<Checkbox />}
                                label={text}
                            />
                        ))}
                    </FormGroup>
                    <Divider />
                    <Spacing value={theme.spacing(4)}></Spacing>

                    <Typography variant="caption">Shared projects</Typography>
                    <Spacing value={theme.spacing(1)}></Spacing>
                    {sharedProjects.map((project, _) => (
                        <Link
                            color="inherit"
                            href={`/projects/details/${project.id}`}
                        >
                            <MUILink
                                paragraph
                                variant="body1"
                                color="inherit"
                                underline="none"
                                sx={{ cursor: 'pointer' }}
                            >
                                {project.name}
                            </MUILink>
                        </Link>
                    ))}
                </FormControl>
            </List>
        </Box>
    )
}
