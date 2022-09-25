import { Stack, TextareaAutosize, Typography } from '@mui/material'
import * as React from 'react'
import { useEffect } from 'react'
import EditButton from './EditButton'

interface EditTextContainerProps {
    title: string
    data: string
    onSave: (name: string) => void
}

export default function EditTextContainer({
    title,
    data,
    onSave,
}: EditTextContainerProps) {
    const [edit, setEdit] = React.useState(false)
    const [text, setText] = React.useState('')
    useEffect(() => {
        setText(data)
    }, [data])

    return (
        <div>
            <Stack
                direction="row"
                alignItems="end"
                justifyContent="space-between"
            >
                <Typography variant={'h5'} width={'80%'} pb={1}>
                    {title}
                </Typography>
                <EditButton
                    editState={edit}
                    onEdit={() => {
                        setEdit(true)
                    }}
                    onSave={() => {
                        setEdit(false)
                        onSave(text)
                    }}
                    onCancel={() => {
                        setEdit(false)
                        setText(data)
                    }}
                />
            </Stack>
            {edit ? (
                <TextareaAutosize
                    placeholder="Enter text"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    style={{
                        width: 'calc(100% - 12px)',
                        maxWidth: '100%',
                        lineHeight: '1.5rem',
                        fontFamily: 'Blinker',
                        fontSize: '1rem',
                        padding: '8px 14px',
                        marginRight: '8px',
                        borderRadius: '4px',
                    }}
                />
            ) : (
                <Typography
                    whiteSpace={'pre-line'}
                    variant={'body1'}
                    ml={'15px'}
                    pt={'4px'}
                    pb={'21px'}
                    sx={{ position: 'relative', top: '5px' }}
                >
                    {text || 'No text'}
                </Typography>
            )}
        </div>
    )
}
