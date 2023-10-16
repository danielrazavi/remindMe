import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ReminderGroup from "../model/ReminderGroup";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import {
  AccessTime,
  AccountCircle,
  AllInbox,
  ContactSupport,
  MailOutline,
} from "@mui/icons-material";

interface ListDrawerProps {
  reminderGroups: ReminderGroup[];
}
function ListDrawer({ reminderGroups }: ListDrawerProps) {
  const [openStates, setOpenStates] = React.useState<boolean[]>(
    new Array(reminderGroups.length).fill(false)
  );

  const handleToggleGroup = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  const handleReminderGroupClick = (index: number) => {
    handleToggleGroup(index);
    // Handle ReminderGroup click behavior here
  };

  const handleReminderListClick = (groupIndex: number, listIndex: number) => {
    // Handle ReminderList click behavior here, e.g., make an API call
    console.log(
      "API call for ReminderList:",
      reminderGroups[groupIndex].groupName,
      reminderGroups[groupIndex].reminderLists[listIndex].listName
    );
    // TODO: need to set up API calls to express app.
  };

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem key="Account" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Contact Us" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ContactSupport />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Newsletter" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailOutline />
            </ListItemIcon>
            <ListItemText primary="Newsletter" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        {["All", "Today", "Scheduled"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <AllInbox /> : <AccessTime />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {reminderGroups.map((groupElement, gindex) => (
          <React.Fragment key={groupElement.groupName}>
            <ListItemButton onClick={() => handleToggleGroup(gindex)}>
              <ListItemIcon>
                {gindex % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={groupElement.groupName} />
              {groupElement.reminderLists.length !== 0 ? (
                openStates[gindex] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItemButton>
            {groupElement.reminderLists.length > 0 ? (
              <Collapse in={openStates[gindex]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {groupElement.reminderLists.map((listElement, lindex) => (
                    <ListItemButton
                      onClick={() => handleReminderListClick(gindex, lindex)}
                      sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={listElement.listName} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            ) : null}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default ListDrawer;
