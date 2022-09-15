import { Stack, Typography } from '@mui/material'
import * as React from 'react'
import { QueryKey, UseQueryResult } from 'react-query'
import { AxiosResponse } from 'axios'
import { ReactNode } from 'react'
import ChangeSettingsButton from './ChangeSettingsButton'
import { ChangeCollaborationDialog } from './ChangeCollaborationDialog'

interface DialogEditProps<TData> {
    title: string
    message: string
    buttonText: string
    multiple: boolean
    data: ReactNode
    queryHook: () => UseQueryResult<AxiosResponse<TData>> & {
        queryKey: QueryKey
    }
    autocompleteSelector: (item: TData) => string
    autocompleteOptions: (
        data: AxiosResponse<TData> | undefined
    ) => ReadonlyArray<TData>
}

export default function EditCollaborationContainer<TData>(
    props: DialogEditProps<TData>
) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div>
            <Typography variant={'h5'}>{props.title}</Typography>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                {props.data}
                <ChangeSettingsButton
                    text={props.buttonText}
                    onClick={() => setIsOpen(true)}
                />
            </Stack>
            <ChangeCollaborationDialog
                title={props.buttonText}
                message={props.message}
                buttonText={props.buttonText}
                open={isOpen}
                multiple={props.multiple}
                onClose={() => setIsOpen(false)}
                queryHook={props.queryHook}
                autocompleteSelector={props.autocompleteSelector}
                autocompleteOptions={props.autocompleteOptions}
            />
        </div>
    )
}
