import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import Header from "./components/base/Header";
import Main from "./components/base/Main";
import selectors from "./components/common/ThemeToggler/state/selectors";
import Modals from "./components/Modals";

interface Props {
  mode: string;
}

function App(props: Props) {
  const { mode } = props;
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode === "dark" ? "dark" : "light",
          background: {
            ...(mode === 'light' ? {default: '#ddd'} : {default: '#121212'})
          }
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
        }}
      >
        <div className="app">
          <Header />
          <Main />
        </div>
      </Box>
      <Modals />
    </ThemeProvider>
  );
}

const mapStateToProps = (state: object) => ({
  mode: selectors.mode(state),
});

export default connect(mapStateToProps)(App);
