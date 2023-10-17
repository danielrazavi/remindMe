import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ReminderCards from "./Card";
import ReminderList from "../model/ReminderList";

interface FeedProps {
  reminderState: {
    groupName: string;
    listName: string;
    listObject: ReminderList;
  };
}

function Feed({ reminderState }: FeedProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h2" component="div">
          {reminderState.listName}
        </Typography>
        <Stack spacing={2}>
          {reminderState.listObject.reminders.map((reminder) =>
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
      </Container>
    </React.Fragment>
  );
}

export default Feed;
