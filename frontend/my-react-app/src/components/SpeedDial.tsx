import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import ListIcon from "@mui/icons-material/List";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import { useEffect, useState } from "react";
import FormDialog from "./FormDialog";
import React from "react";

const actions = [
  { icon: <AddAlertIcon />, name: "Add a new reminder" },
  { icon: <ListIcon />, name: "Add a new list" },
  { icon: <GroupWorkIcon />, name: "Add a new group" },
];

export default function OpenIconSpeedDial() {
  const [formDialogOpen, setFormDialogOpen] = useState(false);

  useEffect(() => {
    console.log("formDialogOpen changed:", formDialogOpen);
  }, [formDialogOpen]);

  const handleFormDialogOpen = () => {
    setFormDialogOpen(true);
  };

  const handleFormDialogClose = () => {
    setFormDialogOpen(false);
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
            onClick={() => handleFormDialogOpen()}
          />
        ))}
      </SpeedDial>
      <FormDialog givenState={formDialogOpen} onClose={handleFormDialogClose} />
    </React.Fragment>
  );
}
