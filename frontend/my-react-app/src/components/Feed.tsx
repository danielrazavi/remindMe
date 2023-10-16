import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import OpenIconSpeedDial from "./SpeedDial";
import ReminderList from "../model/ReminderList";
import ReminderCards from "./Card";
import { useParams } from "react-router-dom";
import { fetchReminderList } from "../model/DatabaseModel";

// interface FeedProps {
//   reminderList: ReminderList;
// }

function Feed() {
  let { reminderListId } = useParams();
  console.log(reminderListId);
  if (!reminderListId) {
    reminderListId = "";
  }
  const reminderList = fetchReminderList({ input: reminderListId });

  return (
    <React.Fragment>
      <CssBaseline />

      <ResponsiveAppBar />

      <Box height={20} />
      <Container maxWidth="sm">
        <Typography variant="h2" component="div">
          {reminderList.listName}
        </Typography>
        <Stack spacing={2}>
          {reminderList.reminders.map((reminder) =>
            !reminder.completed ? (
              <ReminderCards
                key={reminder.id}
                title={reminder.title}
                description={reminder.description}
                dueDate={reminder.dueDate ? new Date(reminder.dueDate) : null}
                completed={reminder.completed}></ReminderCards>
            ) : null
          )}
        </Stack>
        <Box height={20} />

        <OpenIconSpeedDial />
      </Container>
    </React.Fragment>
  );
}

export default Feed;
