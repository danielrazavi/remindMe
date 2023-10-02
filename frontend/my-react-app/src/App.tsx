import React from "react";

import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Stack from "@mui/material/Stack";
import OpenIconSpeedDial from "./components/SpeedDial";
import ReminderCards from "./components/Card";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <ResponsiveAppBar />

      <Box height={20} />
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <ReminderCards />
          <ReminderCards />
          <ReminderCards />
          <ReminderCards />
          <ReminderCards />
        </Stack>
        <Box height={20} />

        <OpenIconSpeedDial />
      </Container>
    </React.Fragment>
  );
}

export default App;
