import Box from "@mui/system/Box";
import React from "react";
import ThemeToggler from "../../common/ThemeToggler";
import Logo from "./Logo";
import "./styles.scss";

function Header() {
  return (
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
  );
}

export default Header;
