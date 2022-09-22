import { createTheme } from '@mui/material/styles'

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#4F98F5',
            dark: '#2e598f',
        },
        secondary: {
            main: '#ffffff',
        },
    },
    typography: {
        fontFamily: ['Blinker', 'sans-serif'].join(','),
        fontWeightMedium: 600,
        h1: {
            fontSize: '72px',
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
            fontSize: '40px',
        },
        h3: {
            fontWeight: 700,
            fontSize: '24px',
        },
        h4: {
            fontWeight: 300,
            fontSize: '24px',
            lineHeight: '26px',
        },
        h5: {
            fontWeight: 600,
            fontSize: '20px',
        },
        h6: {
            fontWeight: 400,
            fontSize: '20px',
        },
        button: {
            fontSize: '16px',
            fontWeight: 600,
            minWidth: '95px',
        },
    },
    shape: {
        borderRadius: 6,
    }
})
