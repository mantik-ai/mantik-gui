import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'
import ChangeSettingsButton from './ChangeSettingsButton'
import { ChangeLabelsDialog } from './ChangeLabelsDialog'
import { LabelArray } from '../../../common/components/LabelArray'
import { useContext } from 'react'
import ProjectSettingsContext from './contexts/ProjectSettingsContext'

interface EditLabelsContainerProps {
    title: string
    message: string
    buttonText: string
}

export default function EditLabelsContainer(props: EditLabelsContainerProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const settings = useContext(ProjectSettingsContext)

    return (
        <div>
            <Typography variant={'h5'}>{props.title}</Typography>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box px={1}>
                    <LabelArray labels={settings.labels}></LabelArray>
                </Box>
                <ChangeSettingsButton
                    text={props.buttonText}
                    onClick={() => setIsOpen(true)}
                />
            </Stack>
            <ChangeLabelsDialog
                title={props.buttonText}
                message={props.message}
                buttonText={props.buttonText}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    )
}
