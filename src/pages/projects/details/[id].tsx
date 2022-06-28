import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const ProjectDetails: NextPage = () => {
    const router = useRouter()
    const { id } = router.query

    return <div>Project Details Page {id}</div>
}

export default ProjectDetails
