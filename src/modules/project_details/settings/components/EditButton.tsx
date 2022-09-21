import { Fab, Stack } from "@mui/material";
import { Edit, Check, Clear } from "@mui/icons-material";
import * as React from "react";

export default function ChangeSettingsButton({
     editState = false,
     onEdit = () => {},
     onSave = () => {},
     onCancel = () => {}
 }) {
    return (
        <>
            {
                editState ? (
                    <Stack direction={"row"}>
                        <Fab size={"small"} color={"secondary"}
                             sx={{ mt: 1, mx: 1 }}
                             onClick={onSave}>
                            <Check />
                        </Fab>
                        <Fab size={"small"} color={"secondary"}
                             sx={{ mt: 1, mx: 1 }}
                             onClick={onCancel}>
                            <Clear />
                        </Fab>
                    </Stack>
                ) : (
                    <Fab size={"small"} color={"primary"} onClick={onEdit}
                         sx={{ mt: 1, mx: 1 }}>
                        <Edit color={"secondary"} />
                    </Fab>
                )
            }
        </>
    );
}
