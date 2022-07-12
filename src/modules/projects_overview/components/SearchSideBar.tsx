import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Link as MUILink,
    TextField,
    Typography,
    useTheme,
} from '@mui/material'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Spacing } from '../../../common/components/Spacing'
import SearchParamerterContext from '../contexts/SearchParameterContext'

export const SearchSideBar = () => {
    const theme = useTheme()

    const searchParameterContext = useContext(SearchParamerterContext)

    const sharedProjects: { name: string; id: string }[] = [
        { name: 'Wind-power output regression', id: 'asdffads' },
        {
            name: 'renewable energy sentiment analysis for the german population',
            id: 'gffdsafdsf',
        },
    ]

    return (
        <Box sx={{ pl: theme.spacing(0.5) }}>
            <Spacing value={theme.spacing(4)}></Spacing>
            <FormControl fullWidth>
                <TextField
                    id="search-string"
                    label="Search"
                    variant="outlined"
                    value={searchParameterContext.searchString!}
                    onChange={(e) =>
                        searchParameterContext.setSearchString!(e.target.value)
                    }
                />
                <Spacing value={theme.spacing(4)}></Spacing>

                <Typography variant="caption">Problem Type</Typography>
                <FormGroup>
                    {searchParameterContext.problemTypes!.map(
                        (problemType, i) => (
                            <FormControlLabel
                                key={problemType.name}
                                id={`problem-type-${problemType.name.toLowerCase()}`}
                                control={<Checkbox />}
                                label={problemType.name}
                                value={
                                    searchParameterContext.problemTypes![i]
                                        .active
                                }
                                onChange={(_, checked) =>
                                    searchParameterContext.setProblemType!(
                                        i,
                                        checked
                                    )
                                }
                            />
                        )
                    )}
                </FormGroup>
                <Divider />
                <Spacing value={theme.spacing(4)}></Spacing>

                <Typography variant="caption">Shared projects</Typography>
                <Spacing value={theme.spacing(1)}></Spacing>
                {sharedProjects.map((project, _) => (
                    <Link
                        key={project.id}
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
        </Box>
    )
}
