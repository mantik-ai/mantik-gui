import { Box, Button, Link, TableCell, TableRow, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { Spacing } from '../../../common/components/Spacing'
import {
    GetProjectsProjectIdRuns200,
    Run,
    useGetProjectsProjectIdRuns,
} from '../../../common/queries'
import { DetailsTable } from '../common/DetailsTable'
import RunDialogContext from './contexts/RunDialogContext'
import { DetailsRunsTableToolbar } from './DetailsRunsTableToolbar'
import { RunDialog } from './RunDialog'

export const DetailsRunsTable = () => {
    const theme = useTheme()
    const router = useRouter()
    const { id } = router.query

    const [openRunDialog, setOpenRunDialog] = React.useState(false)
    const runContext = useContext(RunDialogContext)

    const openDialog = (run?: Run) => {
        setOpenRunDialog(true)
        if (run) runContext.setRun!(run)
    }

    return (
        <Box>
            <DetailsRunsTableToolbar
                openDialog={openDialog}
            ></DetailsRunsTableToolbar>
            <Spacing value={theme.spacing(1)}></Spacing>
            <DetailsTable
                id={Number(id)}
                queryHook={useGetProjectsProjectIdRuns}
                tableHead={[
                    'Experiment',
                    'Model',
                    'Dataset',
                    'Infrastructure',
                    ' ', // To render column for actions
                ]}
            >
                {(data: GetProjectsProjectIdRuns200 | undefined) => (
                    <>
                        {data?.runs?.map((run) => {
                            return (
                                <TableRow key={run.timestamp}>
                                    <TableCell>
                                        <Link
                                            href={
                                                run.experimentRepository
                                                    ?.artifact_location
                                            }
                                        >
                                            {run.experimentRepository?.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        {run.modelRepository?.uri}
                                    </TableCell>
                                    <TableCell>
                                        {run.dataRepository?.dataRepositoryId}
                                    </TableCell>
                                    <TableCell>
                                        {run.connections?.connectionName}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="outlined"
                                            onClick={() => openDialog(run)}
                                        >
                                            Re-run
                                        </Button>
                                        <Button variant="outlined">
                                            Details
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </>
                )}
            </DetailsTable>
            <RunDialog
                projectId={43254} //TODO: set programmatically after api-spec fix
                open={openRunDialog}
                setOpen={setOpenRunDialog}
            ></RunDialog>
        </Box>
    )
}
