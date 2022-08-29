import { Box } from '@mui/material'
import { FC } from 'react'

interface SpacingProps {
    value: string
    horizontal?: boolean
}
export const Spacing: FC<SpacingProps> = (props) => {
    return (
        <Box
            height={props.horizontal ? undefined : props.value}
            width={props.horizontal ? props.value : undefined}
        ></Box>
    )
}
