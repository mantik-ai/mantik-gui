import { GitHub } from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Stack,
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
    return (
        <Stack direction={'row'} flexWrap={'wrap'} spacing={'auto'} mt={4}>
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
                    <Button
                        sx={{ ml: 'auto' }}
                        variant={'outlined'}
                        size="small"
                        href={props.codeRepository.uri}
                        target={'_blank'}
                    >
                        visit
                    </Button>
                </CardActions>
            </Card>
        </Stack>
    )
}
