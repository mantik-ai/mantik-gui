import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ErrorProps } from 'next/error'

const Error = ({ statusCode }: ErrorProps) => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h2" align="center">
                {`Ups... ${
                    statusCode == 404
                        ? 'the page you requested cannot be found'
                        : 'something has gone wrong. We will fix it ASAP'
                }
                `}
            </Typography>
        </Box>
    )
}

// Error.getInitialProps = ({ res, err }: NextPageContext) => {
//     const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//     return { statusCode }
// }

export default Error
