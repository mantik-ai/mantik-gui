import { Button, Stack, Switch, Typography } from "@mui/material";
import * as React from "react";
import { useRouter } from "next/router";
import useModal from "../../../common/hooks/useModal";
import { ChangeSettingsDialog } from "../../../common/components/ChangeSettingsDialog";
import { useGetProjectsProjectId, useGetUsers, User } from "../../../common/queries";
import EditButton from "../../../common/components/EditButton";

export const GeneralSettings = () => {
  const { open, openModal, closeModal } = useModal();
  const router = useRouter();
  const { id } = router.query;
  const { data, status } = useGetProjectsProjectId(id as string);
  const { edit, setEdit } = React.useState({});

  return (
    <>
      <div>
        <Typography variant={"h5"}>Project Name</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant={"body1"}>@Todo insert</Typography>
          <EditButton name={"Edit Name"} onClick={() => {
          }} />
        </Stack>
      </div>
      <div>
        <Typography variant={"h5"}>Short Description</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant={"body1"}>@Todo insert</Typography>
          <EditButton name={"Edit Description"} onClick={() => {
          }} />
        </Stack>
      </div>
      <div>
        <Typography variant={"h5"}>Labels</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant={"body1"}>@Todo insert</Typography>
          <Button variant="outlined" onClick={() => {
          }}>
            Edit Labels
          </Button>
        </Stack>
      </div>
      <div>
        <Typography variant={"h5"}>Owner</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant={"body1"}>
            The project is currently owned by:{" "}
          </Typography>
          <Button variant="outlined" onClick={() => openModal()}>
            Change Owner
          </Button>
        </Stack>
      </div>
      <div>
        <Typography variant={"h5"}>Visibility</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>private</Typography>
          <Switch checked={false} color="primary" />
          <Typography>public</Typography>
        </Stack>
      </div>
      <ChangeSettingsDialog
        title={"Change Owner"}
        message={
          "Please select a user to designate as the owner of this project. Please be aware that this action can only be undone by the new owner."
        }
        buttonText={"Change Owner"}
        open={open}
        multiple={false}
        projectId={id as string}
        onClose={() => closeModal()}
        queryHook={useGetUsers}
        autocompleteSelector={(user: User) => user.name}
        autocompleteOptions={(option) => option?.data.users ?? []}
      />
      {status === "loading" && <div>Loading...</div>}


    </>
  );
};
