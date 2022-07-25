import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import PeopleIcon from '@mui/icons-material/People'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button, Stack } from '@mui/material'

export default function AccountMenu() {
    const { data: session } = useSession()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    if (session) {
        const name = session.user?.name
        return (
            <>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Tooltip title="Your Account">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>
                                {name?.charAt(0)}
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <Stack direction="column" alignItems="center">
                        <Typography variant="overline">signed in as</Typography>
                        <Typography variant="body1" px={4} pb={1}>
                            {session.user?.name}
                        </Typography>
                    </Stack>
                    <Divider sx={{ my: 1 }} />
                    <MenuItem>
                        <ListItemIcon>
                            <PeopleIcon fontSize="small" />
                        </ListItemIcon>
                        Friends
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => signOut()}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </>
        )
    }

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
                    size={'small'}
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
