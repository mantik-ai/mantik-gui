import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useGetLabelsSearch } from "../../../common/queries";
import ProjectSettingsContext from "./contexts/ProjectSettingsContext";

interface ChangeLabelsDialogProps {
    title: string;
    message: string;
    open: boolean;
    onClose: () => void;
}

export const ChangeLabelsDialog = (props: ChangeLabelsDialogProps) => {
    const context = useContext(ProjectSettingsContext);
    const [labelSearchString, setLabelSearchString] = useState("");
    const { data, status } = useGetLabelsSearch({
        searchString: labelSearchString
    });
    const [labels, setLabels] = useState(context.settings?.labels ?? []);

    useEffect(() => {
        setLabels(context.settings?.labels ?? []);
    }, [context.settings?.labels]);

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth={true}
            maxWidth={"sm"}
        >
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.message}</DialogContentText>

                <Autocomplete
                    multiple
                    value={labels}
                    onChange={(event, newValue) => {
                        setLabels(newValue);
                    }}
                    isOptionEqualToValue={(option, value) => option.name === value.name}
                    options={data?.data.labels ?? []}
                    getOptionLabel={(label) => label.name}
                    loading={status !== "success"}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            sx={{ py: 4 }}
                            size="small"
                            placeholder="add..."
                        />
                    )}
                />

            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    sx={{ color: "#bdbdbd" }}
                    onClick={() => {
                        setLabels(context.settings?.labels ?? []);
                        props.onClose();
                    }}
                >
                    Cancel
                </Button>
                <Button variant={"outlined"} onClick={() => {
                    context.setLabels(labels)
                    props.onClose();
                }}>Save Changes</Button>
            </DialogActions>
        </Dialog>
    );
};
