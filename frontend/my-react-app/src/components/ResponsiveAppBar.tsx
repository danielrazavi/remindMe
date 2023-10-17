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

interface ResponsiveAppBarProps {
  updateFeedFunction: Function;
}

function ResponsiveAppBar({ updateFeedFunction }: ResponsiveAppBarProps) {
  const [state, setState] = React.useState({
    leftDrawer: false,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, leftDrawer: open });
    };

  const reminderGroupData: ReminderGroup[] = fetchReminderGroup();

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              onClick={toggleDrawer(true)}
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
        open={state["leftDrawer"]}
        onClose={toggleDrawer(false)}>
        <ListDrawer
          toggleDrawer={toggleDrawer}
          updateFeedFunction={updateFeedFunction}
          reminderGroups={reminderGroupData}
        />
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
