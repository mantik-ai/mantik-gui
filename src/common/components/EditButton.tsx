import { Button } from "@mui/material";
import * as React from "react";

export default function EditButton({name = "", onClick = () => {}}) {
  const [clicked, setClicked] = React.useState(false);

  return (
    <Button variant="outlined" color={clicked ? "warning" : "primary"} onClick={() => {
      setClicked(() => !clicked);
      onClick();
    }}>
      { clicked ? "Cancel" : name }
    </Button>
  )
}
