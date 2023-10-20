import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { fetchAccountInfo } from "../model/DatabaseModel";
import { useNavigate } from "react-router";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function AccountPage() {
  const navigate = useNavigate();
  const fetchedMember = fetchAccountInfo();

  const [currentMember, setCurrentMember] = React.useState({
    firstName: fetchedMember.firstName,
    middleName: fetchedMember.middleName,
    lastName: fetchedMember.lastName,
    email: fetchedMember.email,
    phone: fetchedMember.phoneNumber,
  });

  // TODO: look into this!
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                defaultValue={currentMember.firstName}
                label="First Name"
                name="first name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                margin="normal"
                fullWidth
                id="middleName"
                defaultValue={currentMember.middleName}
                label="Middle Name"
                name="middle name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                defaultValue={currentMember.lastName}
                label="Last Name"
                name="last name"
                autoFocus
              />
            </Grid>
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            defaultValue={currentMember.email}
            name="email"
            label="Email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            defaultValue={currentMember.phone}
            label="Phone Number"
            name="phone number"
            autoFocus
          />
          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{ mt: 3, mb: 2 }}>
            Change Password
          </Button>
          <Button
            type="submit"
            fullWidth
            size="small"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Save Changes
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Go Back...
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
