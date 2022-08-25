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
import { Project } from '../../../common/queries'

interface ProjectEntryProps {
    project: Project
}
export const ProjectEntry = (props: ProjectEntryProps) => {
    return (
        <Card>
            <CardHeader
                title={props.project.name}
                subheader={`from ${props.project.owner.name}`}
            ></CardHeader>
            <CardContent>
                <Typography variant="body1">
                    {props.project.description?.short}
                </Typography>
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
