import NotificationsIcon from '@mui/icons-material/Notifications'
import { Badge } from '@mui/material'
import * as React from 'react'

const Notification = () => {
    return (
        <Badge
            badgeContent={4}
            max={99}
            color="info"
            sx={{
                cursor: 'pointer',
                '& .MuiBadge-badge': {
                    color: 'white',
                    backgroundColor: '#bdbdbd',
                },
            }}
        >
            <NotificationsIcon color="secondary" />
        </Badge>
    )
}

export default Notification
