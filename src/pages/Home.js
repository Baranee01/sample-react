import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
export default function Home() {
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://media.tenor.com/SSY2V0RrU3IAAAAd/rick-roll-rick-rolled.gif)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4" sx={{ mt: 5, mb: 5 }}>
              Welcome to Home Page
            </Typography>

            <Button
              variant="contained"
              component={Link}
              to="/signup"
              sx={{ mt: 1 }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/signin"
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
