import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useContext } from "react";
import { LabelArray } from "../../../common/components/LabelArray";
import ChangeSettingsButton from "./ChangeSettingsButton";
import { ChangeLabelsDialog } from "./ChangeLabelsDialog";
import ProjectSettingsContext from "./contexts/ProjectSettingsContext";

interface EditLabelsContainerProps {
    title: string;
    message: string;
}

export default function EditLabelsContainer(props: EditLabelsContainerProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const context = useContext(ProjectSettingsContext);

    return (
        <div>
            <Typography variant={"h5"}>{props.title}</Typography>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box px={1}>
                    <LabelArray labels={context.settings?.labels}></LabelArray>
                </Box>
                <ChangeSettingsButton onEdit={() => setIsOpen(true)} />
            </Stack>
            <ChangeLabelsDialog
                title={`Edit ${props.title}`}
                message={props.message}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
}
