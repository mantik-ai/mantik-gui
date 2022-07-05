import { createTheme } from '@mui/material'

// declare module '@mui/material/styles' {
//     interface Theme {
//         status: {
//             danger: string
//         }
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//         status?: {
//             danger?: string
//         }
//     }
// }

export const defaultTheme = createTheme({
    palette: {
        secondary: {
            main: '#ffffff',
        },
        primary: {
            main: '#4F98F5',
        },
    },
})
