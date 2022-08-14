import { Person } from '@mui/icons-material'
import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Link as MUILink,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Spacing } from '../../../common/components/Spacing'
import { useGetProjectsUserUserId } from '../../../common/queries'
import SearchParamerterContext from '../contexts/SearchParameterContext'
import { LabelSelector } from './LabelSelector'

export const SearchSideBar = () => {
    const theme = useTheme()
    const searchParameterContext = useContext(SearchParamerterContext)

    const upToMediumSize = useMediaQuery(theme.breakpoints.up('md'))
    const { data } = useGetProjectsUserUserId(500)

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

                <Spacing value={theme.spacing(4)}></Spacing>
                <Typography variant="caption">Labels</Typography>
                <LabelSelector></LabelSelector>

                <Spacing value={theme.spacing(4)}></Spacing>
                <Divider />
                <Spacing value={theme.spacing(4)}></Spacing>
                {upToMediumSize ? (
                    <>
                        <Stack direction="row" gap={theme.spacing(0.5)}>
                            <Person />
                            <Typography variant="overline">
                                Your Projects
                            </Typography>
                        </Stack>
                        <Spacing value={theme.spacing(1)}></Spacing>
                        {data?.data.projects?.map((project) => (
                            <Link
                                key={project.projectId}
                                color="inherit"
                                href={`/projects/details/${project.projectId}`}
                                passHref
                            >
                                <MUILink
                                    paragraph
                                    variant="body1"
                                    color="inherit"
                                    underline="none"
                                    sx={{ cursor: 'pointer' }}
                                >
                                    {project.projectId}
                                </MUILink>
                            </Link>
                        ))}
                    </>
                ) : null}
            </FormControl>
        </Box>
    )
}
