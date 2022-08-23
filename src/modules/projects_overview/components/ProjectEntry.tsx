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
            <CardHeader title={props.project.projectId}></CardHeader>
            <CardContent>
                <Typography variant="body1">
                    from {props.project.owner.name}
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
