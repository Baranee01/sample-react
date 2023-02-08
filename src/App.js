import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp";
import BasicTable from "./pages/Table";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from "@mui/material";
import Brightness4Sharp from "@mui/icons-material/Brightness4";
import Brightness7Sharp from "@mui/icons-material/Brightness7";

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        onClick={colorMode.toggleColorMode}
        color="inherit"
        sx={{ position: "fixed", top: 5, right: 5 }}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Sharp />
        ) : (
          <Brightness4Sharp />
        )}
      </IconButton>
      <div className="App">
        <div className="App-header">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/signin" element={<SignIn />} />
              <Route exact path="/view" element={<BasicTable />} />
            </Routes>
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
