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

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["Account", "Contact Us", "Newsletter"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {reminderGroups.map((groupElement, index) => (
          <React.Fragment key={groupElement.groupName}>
            <ListItemButton onClick={() => handleToggleGroup(index)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={groupElement.groupName} />
              {groupElement.reminderLists.length !== 0 ? (
                openStates[index] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItemButton>
            {groupElement.reminderLists.length > 0 ? (
              <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {groupElement.reminderLists.map((listElement, index) => (
                    <ListItemButton sx={{ pl: 4 }}>
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
