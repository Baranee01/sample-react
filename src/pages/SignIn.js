import * as React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("name"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxwidth="xs">
      <Typography component="h1" variant="h5" sx={{ mt: 3, mb: 2 }}>
        Welcome to Login Page
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid>
          <Grid item>
            <TextField
              margin="normal"
              required
              id="username"
              label="Username"
              name="name"
            />
          </Grid>
          <Grid item>
            <TextField
              margin="normal"
              required
              id="password"
              label="Password"
              name="password"
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" sx={{ mt: 4, mb: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  );
}
