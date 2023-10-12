import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import ReminderGroup from "../model/ReminderGroup";
import { fetchReminderGroup } from "../model/DatabaseModel";
import ListDrawer from "./ListDrawer";

type Anchor = "left";

function ResponsiveAppBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const reminderGroupData: ReminderGroup[] = fetchReminderGroup();

  return (
    <React.Fragment key={state.left.toString()}>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              onClick={toggleDrawer("left", true)}
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RemindMe
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}>
        <ListDrawer reminderGroups={reminderGroupData} />
      </Drawer>
    </React.Fragment>
  );
}

export default ResponsiveAppBar;
