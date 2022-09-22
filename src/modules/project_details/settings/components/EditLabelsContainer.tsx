import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { LabelArray } from '../../../../common/components/LabelArray'
import { Label } from '../../../../common/queries'
import EditButton from './EditButton'
import { LabelsDialog } from './LabelsDialog'

interface EditLabelsContainerProps {
    title: string
    message: string
    labels: Label[]
    onSave: (labels: Label[]) => void
}

export default function EditLabelsContainer(props: EditLabelsContainerProps) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div>
            <Typography variant={'h5'}>{props.title}</Typography>
            <Stack
                direction="row"
                alignItems="top"
                justifyContent="space-between"
            >
                <Box px={1}>
                    <LabelArray labels={props.labels}></LabelArray>
                </Box>
                <EditButton onEdit={() => setIsOpen(true)} />
            </Stack>
            <LabelsDialog
                title={`Edit ${props.title}`}
                message={props.message}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                labels={props.labels}
                onSave={(newLabels) => props.onSave(newLabels)}
            />
        </div>
    )
}
