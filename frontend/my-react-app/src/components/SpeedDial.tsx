import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import ListIcon from "@mui/icons-material/List";
import GroupWorkIcon from "@mui/icons-material/GroupWork";

const actions = [
  { icon: <AddAlertIcon />, name: "Add a new reminder" },
  { icon: <ListIcon />, name: "Add a new list" },
  { icon: <GroupWorkIcon />, name: "Add a new group" },
];

export default function OpenIconSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}>
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
