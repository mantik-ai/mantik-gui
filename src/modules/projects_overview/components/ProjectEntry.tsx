import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Project } from '../../../common/queries'

interface ProjectEntryProps {
    project: Project
}
export const ProjectEntry = (props: ProjectEntryProps) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.project.projectId}
                </Typography>
                <Typography variant="body2">
                    from {props.project.owner.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/projects/details/${props.project.projectId}`}>
                    <Button size="small">View details</Button>
                </Link>
            </CardActions>
        </Card>
    )
}
