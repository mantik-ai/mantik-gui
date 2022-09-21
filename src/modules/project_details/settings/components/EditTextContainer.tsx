import { Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import * as React from "react";
import ChangeSettingsButton from "./ChangeSettingsButton";
import { useEffect } from "react";

export default function EditTextContainer({
                                              title = "",
                                              data = "",
                                              onSave = (name: string) => {
                                              }
                                          }) {
    const [edit, setEdit] = React.useState(false);
    const [text, setText] = React.useState("");
    useEffect(() => {
        setText(data);
    }, [data]);

    console.log(data);
    return (
        <div>
            <Typography variant={"h5"}>{title}</Typography>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                {edit ? (
                    <TextareaAutosize
                        placeholder="Enter text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        style={{
                            width: "80%",
                            maxWidth: "80%",
                            marginTop: "4px",
                            lineHeight: "1.25rem",
                            fontFamily: "Blinker",
                            fontSize: "1rem",
                            padding: "8px 14px",
                            borderRadius: "4px",
                        }}
                    />
                ) : (
                    <Typography whiteSpace={"pre-line"} variant={"body1"} ml={"15px"} sx={{position: "relative", top: "2px"}}>
                        {text || "No text"}
                    </Typography>
                )}
                <ChangeSettingsButton
                    editState={edit}
                    onEdit={() => {
                        setEdit(true);
                    }}
                    onSave={() => {
                        setEdit(false);
                        onSave(text);
                    }}
                    onCancel={() => {
                        setEdit(false);
                        setText(data);
                    }}
                />
            </Stack>
        </div>
    );
}
