import Link from 'next/link'
import { Button } from '@mui/material'
import Divider from '@mui/material/Divider'
import * as React from 'react'

const LoginRegister = () => {
    return (
        <>
            <Link href={'/register'} passHref>
                <Button color="secondary" variant="outlined">
                    register
                </Button>
            </Link>
            <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: 'white' }}
            />

            <Link href={'/login'} passHref>
                <Button
                    href={'/login'}
                    color="secondary"
                    variant="contained"
                    sx={{ color: 'primary.main' }}
                >
                    login
                </Button>
            </Link>
        </>
    )
}

export default LoginRegister
