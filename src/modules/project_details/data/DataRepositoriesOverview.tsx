import React from 'react'
import { DetailsToolbar } from '../../../common/components/DetailsToolbar'
import { DetailsDataTable } from './DetailsDataTable'

export const DataRepositoriesOverview = () => {
    return (
        <>
            <DetailsToolbar title={'Data'} tool={<></>}></DetailsToolbar>
            <DetailsDataTable></DetailsDataTable>
        </>
    )
}
