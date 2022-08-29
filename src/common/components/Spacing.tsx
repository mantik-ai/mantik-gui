import { Box } from '@mui/system'
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
