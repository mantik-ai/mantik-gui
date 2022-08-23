import { GitHub } from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
    useTheme,
} from '@mui/material'
import React from 'react'
import { LabelArray } from '../../../common/components/LabelArray'
import { CodeRepository } from '../../../common/queries'

interface CodeRepositoryCardProps {
    codeRepository: CodeRepository
}
export const CodeRepositoryCard = (props: CodeRepositoryCardProps) => {
    const theme = useTheme()
    return (
        <Box p={theme.spacing(1)}>
            <Card>
                <CardHeader
                    avatar={<GitHub></GitHub>}
                    title={
                        props.codeRepository.uri === ''
                            ? '<Empty>'
                            : props.codeRepository.uri
                    }
                ></CardHeader>
                <CardContent>
                    <Typography variant="body1">
                        {props.codeRepository.description ?? '<No Description>'}
                    </Typography>
                    {props.codeRepository.labels ? (
                        <LabelArray
                            labels={props.codeRepository.labels}
                        ></LabelArray>
                    ) : null}
                </CardContent>
                <CardActions>
                    <Button size="small">visit</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
