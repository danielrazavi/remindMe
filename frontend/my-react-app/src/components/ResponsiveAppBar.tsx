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
import { AccountCircle } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

interface ResponsiveAppBarProps {
  updateFeedFunction: Function;
}

function ResponsiveAppBar({ updateFeedFunction }: ResponsiveAppBarProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [state, setState] = React.useState({
    leftDrawer: false,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, leftDrawer: open });
    };

  const reminderGroupData: ReminderGroup[] = fetchReminderGroup();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (navigateTo: String) => {
    setAnchorEl(null);
    // console.log(navigateTo);
    navigate("/" + navigateTo);
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Burger Menu Button */}
            <IconButton
              size="large"
              edge="start"
              onClick={toggleDrawer(true)}
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>

            {/* Brand Text */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RemindMe
            </Typography>

            {/* Profile Button */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem onClick={(event) => handleClose("account")}>
                My Account
              </MenuItem>
              {/* <MenuItem onClick={(event) => handleClose("ContactUs")}>
                Contact Us
              </MenuItem>
              <MenuItem onClick={(event) => handleClose("Newsletter")}>
                Newsletter
              </MenuItem> */}
              <MenuItem onClick={(event) => handleClose("signin")}>
                Sign Out
              </MenuItem>
            </Menu>
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
