import { Stack, TextareaAutosize, Typography } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import EditButton from "./EditButton";

interface EditTextContainerProps {
    title: string;
    data: string;
    onSave: (name: string) => void;
}

export default function EditTextContainer({
        title,
        data,
        onSave
    }: EditTextContainerProps) {
    const [edit, setEdit] = React.useState(false);
    const [text, setText] = React.useState("");
    useEffect(() => {
        setText(data);
    }, [data]);

    return (
        <div>
            <Typography variant={"h5"} width={"80%"}>
                {title}
            </Typography>
            <Stack
                direction="row"
                alignItems="top"
                justifyContent="space-between"
            >
                {edit ? (
                    <TextareaAutosize
                        placeholder="Enter text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        style={{
                            width: "100%",
                            maxWidth: "100%",
                            marginTop: "4px",
                            lineHeight: "1.5rem",
                            fontFamily: "Blinker",
                            fontSize: "1rem",
                            padding: "8px 14px",
                            borderRadius: "4px"
                        }}
                    />
                ) : (
                    <Typography
                        whiteSpace={"pre-line"}
                        variant={"body1"}
                        ml={"15px"}
                        pt={1}
                        pb={"14px"}
                        sx={{ position: "relative", top: "5px" }}
                    >
                        {text || "No text"}
                    </Typography>
                )}
                <EditButton
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
