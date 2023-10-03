import React from "react";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Stack from "@mui/material/Stack";
import OpenIconSpeedDial from "./components/SpeedDial";
import ReminderCards from "./components/Card";

// Define a function to return the dummy data
function getDummyData() {
  return [
    {
      id: 1,
      title: "Buy Groceries",
      description: "Milk, eggs, bread, and fruits",
      dueDate: "2023-10-10T12:00:00Z",
      completed: false,
    },
    {
      id: 2,
      title: "Meeting with Client",
      description: "Discuss project requirements",
      completed: false,
    },
    {
      id: 3,
      title: "Pay Utility Bills",
      description: "Electricity and water bills",
      dueDate: "2023-10-20T10:00:00Z",
      completed: true,
    },
    {
      id: 4,
      title: "Finish Homework",
      description: "Complete math assignment",
      dueDate: "2023-10-12T18:00:00Z",
      completed: false,
    },
  ];
}

function App() {
  const reminders = getDummyData();
  return (
    <React.Fragment>
      <CssBaseline />

      <ResponsiveAppBar />

      <Box height={20} />
      <Container maxWidth="sm">
        <Stack spacing={2}>
          {reminders.map((reminder) =>
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
