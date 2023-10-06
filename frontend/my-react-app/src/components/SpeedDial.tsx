import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import ListIcon from "@mui/icons-material/List";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import { useEffect, useState } from "react";
import NewReminderDialog from "./NewReminderDialog";
import React from "react";
import NewListDialog from "./NewListDialog";
import NewGroupDialog from "./NewGroupDialog";

const actions = [
  { icon: <AddAlertIcon />, name: "Add a new reminder" },
  { icon: <ListIcon />, name: "Add a new list" },
  { icon: <GroupWorkIcon />, name: "Add a new group" },
];

export default function OpenIconSpeedDial() {
  const [newReminderDialogOpen, setNewReminderDialogOpen] = useState(false);
  const [newListDialogOpen, setNewListDialogOpen] = useState(false);
  const [newGroupDialogOpen, setNewGroupDialogOpen] = useState(false);

  const handleFormDialogOpen = (name: string) => {
    if (name == "Add a new reminder") {
      setNewReminderDialogOpen(true);
    } else if (name == "Add a new list") {
      setNewListDialogOpen(true);
    } else if (name == "Add a new group") {
      setNewGroupDialogOpen(true);
    }
  };

  const handleFormDialogClose = (name: string) => {
    if (name == "Add a new reminder") {
      setNewReminderDialogOpen(false);
    } else if (name == "Add a new list") {
      setNewListDialogOpen(false);
    } else if (name == "Add a new group") {
      setNewGroupDialogOpen(false);
    }
  };

  return (
    <React.Fragment>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleFormDialogOpen(action.name)}
          />
        ))}
      </SpeedDial>
      <NewReminderDialog
        givenState={newReminderDialogOpen}
        onClose={() => handleFormDialogClose("Add a new reminder")}
      />
      <NewListDialog
        givenState={newListDialogOpen}
        onClose={() => handleFormDialogClose("Add a new list")}
      />
      <NewGroupDialog
        givenState={newGroupDialogOpen}
        onClose={() => handleFormDialogClose("Add a new group")}
      />
    </React.Fragment>
  );
}
