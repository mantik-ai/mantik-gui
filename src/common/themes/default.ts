import { createTheme } from '@mui/material'

export const defaultTheme = createTheme({
    palette: {
        secondary: {
            main: '#ffffff',
        },
        primary: {
            main: '#4F98F5',
        },
    },
    typography: {
        fontFamily: ['Blinker', 'sans-serif'].join(','),
    },
})
