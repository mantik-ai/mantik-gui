import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormGroup,
    useTheme,
} from '@mui/material'
import React, { useContext } from 'react'
import { Spacing } from '../../../common/components/Spacing'
import {
    useGetProjectsProjectIdData,
    useGetProjectsProjectIdExperiments,
    useGetProjectsProjectIdModels,
} from '../../../common/queries'
import RunDialogContext from './contexts/RunDialogContext'
import { RunDialogFormInput } from './RunDialogFormInput'

interface RunRepeatDialogProps {
    open: boolean
    projectId: string
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const RunDialog = (props: RunRepeatDialogProps) => {
    const theme = useTheme()
    const { data: dataRepository } = useGetProjectsProjectIdData(
        props.projectId
    )
    const { data: experimentRepository } = useGetProjectsProjectIdExperiments(
        props.projectId
    )
    const { data: modelRepository } = useGetProjectsProjectIdModels(
        props.projectId
    )
    // const { data: dataRepository } = useGetProjectsProjectIdConnection(props.projectId) //TODO: make api route
    const runContext = useContext(RunDialogContext)

    const handleClose = () => {
        props.setOpen(false)
        runContext.clearRun!()
    }

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle>
                {`${runContext.run ? 'Re-' : 'Create '}Run ${
                    runContext.run
                        ? `"${runContext.run.experimentRepository?.name}"`
                        : ''
                }`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Select the parameter you want your run to start with
                </DialogContentText>
                <Spacing value={theme.spacing(2)}></Spacing>
                <FormGroup>
                    <RunDialogFormInput
                        options={
                            experimentRepository?.data.experimentRepositories ??
                            []
                        }
                        name="Experiment"
                        fieldSelector={(x) => x.name ?? '<No Name>'}
                        onChange={(e) => runContext.setExperiment!(e)}
                    ></RunDialogFormInput>
                    <Spacing value={theme.spacing(2)}></Spacing>
                    <RunDialogFormInput
                        options={dataRepository?.data.dataRepositories ?? []}
                        name="Dataset"
                        fieldSelector={(x) => x.uri}
                        onChange={(e) => runContext.setData!(e)}
                    ></RunDialogFormInput>
                    <Spacing value={theme.spacing(2)}></Spacing>
                    <RunDialogFormInput
                        options={modelRepository?.data.modelRepositories ?? []}
                        name="Model"
                        fieldSelector={(x) => x.uri ?? '<No Name>'}
                        onChange={(e) => runContext.setModel!(e)}
                    ></RunDialogFormInput>
                    <Spacing value={theme.spacing(2)}></Spacing>
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button>Run!</Button>
            </DialogActions>
        </Dialog>
    )
}
