import { Paper } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";
import ThemeToggler from "../../common/ThemeToggler";
import Logo from "./Logo";
import "./styles.scss";

function Header() {
  return (
    <Paper elevation={3}>
    <Box 
    p={2}
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Logo />
      <ThemeToggler />
    </Box>
      </Paper>
  );
}

export default Header;
