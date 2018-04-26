import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "material-ui/Button";

import styled from "styled-components";

const Title = styled.h1`
  padding-left: 1rem;
  font-size: 1.5rem;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
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

const appBar = {
  backgroundColor: "#00afcc"
};

const BarApp = ({ toogleDrawer, email }) => {
  return (
    <div>
      <AppBar position="static" style={appBar}>
        <Toolbar style={content}>
          <SectionTitle>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={toogleDrawer}
            >
              <MenuIcon />
            </IconButton>

            <Title>Code daily</Title>
          </SectionTitle>
          {email === "" ? (
            <Link to="/login" style={link}>
              <Button>
                <TextButton>Log in</TextButton>
              </Button>{" "}
            </Link>
          ) : (
            email
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

BarApp.prototype = {
  toogleDrawer: PropTypes.func.isRequired,
  email: PropTypes.string
};

export default BarApp;
