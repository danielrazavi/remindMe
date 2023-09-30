import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        benevolent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

function App() {
  return (
    <div>
      <React.Fragment>
        {/* Need to add a basic app bar: https://mui.com/material-ui/react-app-bar/ */}

        {/* What is CSS Baseline? */}
        {/* <CssBaseline /> */}

        <Container maxWidth="sm">
          <Card variant="outlined">{card}</Card>
          <Card variant="outlined">{card}</Card>
          <Card variant="outlined">{card}</Card>
          <Card variant="outlined">{card}</Card>

          {/* https://mui.com/material-ui/react-speed-dial/ */}
          <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}>
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
