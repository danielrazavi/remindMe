import React from "react";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Stack from "@mui/material/Stack";
import OpenIconSpeedDial from "./components/SpeedDial";
import ReminderCards from "./components/Card";
import { fetchReminderList } from "./model/DatabaseModel";

function App() {
  const reminderList = fetchReminderList();
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

export default App;
