import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    useTheme,
} from '@mui/material'
import React from 'react'
import { Spacing } from '../../../common/components/Spacing'
import {
    DataRepository,
    Run,
    useGetProjectsProjectIdData,
} from '../../../common/queries'

interface RunRepeatDialogProps {
    open: boolean
    run: Run
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const RunRepeatDialog = (props: RunRepeatDialogProps) => {
    const theme = useTheme()
    const { data, error } = useGetProjectsProjectIdData(111)

    const [selectedDataRepo, setSelectedDataRepo] = React.useState(
        props.run.dataRepository
    )

    const handleClose = () => {
        props.setOpen(false)
    }

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle>
                Re-Run "{props.run.experimentRepository?.name}"
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Select the parameter you want your run to start with
                </DialogContentText>
                <Spacing value={theme.spacing(2)}></Spacing>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Data Repository
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedDataRepo}
                        label="Data Repository"
                        onChange={(e) =>
                            setSelectedDataRepo(
                                e.target.value as DataRepository
                            )
                        }
                    >
                        {data?.data.dataRepositories?.map((repo) => (
                            //@ts-ignore - necessary to load object into value
                            <MenuItem key={repo.uri} value={repo}>
                                {repo.uri}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button>Run!</Button>
            </DialogActions>
        </Dialog>
    )
}
