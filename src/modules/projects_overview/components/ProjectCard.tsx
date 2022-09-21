import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
    Link as MUILink,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { LabelArray } from '../../../common/components/LabelArray'
import { Project } from '../../../common/queries'

interface ProjectEntryProps {
    project: Project
}
export const ProjectCard = (props: ProjectEntryProps) => {
    return (
        <Card>
            <CardHeader
                title={props.project.name}
                subheader={`from ${props.project.owner.name}`}
            ></CardHeader>
            <CardContent sx={{ pb: 0 }}>
                <Typography variant="body1">
                    {props.project.executiveSummary}
                </Typography>
                <LabelArray labels={props.project.labels}></LabelArray>
            </CardContent>
            <CardActions>
                <Link
                    href={`/projects/details/${props.project.projectId}`}
                    passHref
                >
                    <Button LinkComponent={MUILink} size="small">
                        view details
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}
