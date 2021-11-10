import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import Main from "./components/base/Main";
import ThemeToggler from "./components/common/ThemeToggler";
import selectors from "./components/common/ThemeToggler/state/selectors";

interface Props {
  mode: string;
}

function App(props: Props) {
  const { mode } = props;
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ? "dark" : "light",
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <ThemeToggler />
        <Main />
      </Box>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: object) => ({
  mode: selectors.isDarkMode(state),
});

export default connect(mapStateToProps)(App);