import { AppBar, Container, Toolbar, Link } from "@mui/material";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container>
        <Toolbar>
          <Link
            href="/"
            sx={{
              mr: "auto",
            }}
          >
          VFY  
          </Link>
          <Link
            href=""
            target="__blank"
            rel="noopener"
          >
            Shared
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
