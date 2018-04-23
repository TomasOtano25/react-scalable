import React from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import styled from "styled-components";

const Title = styled.h1`
  padding-left: 1rem;
  font-size: 1.5rem;
`;

const SectionTitle = styled.div`
  display: flex;
`;

const TextButton = styled.span`
  color: #fff;
`;

const content = {
  justifyContent: "space-between"
};

const link = {
  textDecoration: "none"
};

const BarApp = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={content}>
          <SectionTitle>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography color="inherit">
              <Title>Code daily</Title>
            </Typography>
          </SectionTitle>

          <Button>
            <Link to="/login" style={link}>
              <TextButton>Log in</TextButton>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default BarApp;
