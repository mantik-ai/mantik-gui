import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'

const removeIdFromPath = (path: string) => {
    const pathArray = path.split('/')
    const filteredPathArray = pathArray.filter(
        (item) => /^[a-zA-Z]+$/.test(item) && item !== '[id]'
    )
    return filteredPathArray.join('/')
}

export default function SideBarItem({
    name,
    path,
    icon,
}: {
    name: string
    path: string
    icon: ReactNode
}) {
    const router = useRouter()
    const isSelected =
        removeIdFromPath(router.pathname) === removeIdFromPath(path)

    return (
        <Link key={name} href={path}>
            <ListItemButton key={name} selected={isSelected}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
            </ListItemButton>
        </Link>
    )
}
