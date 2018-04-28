import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";

const buttonColor = {
  backgroundColor: "#e84393",
  position: "fixed",
  right: "2rem",
  bottom: "2rem",
  color: "#fff"
};

const FloatButton = ({ onClick }) => {
  return (
    <div>
      <Button
        variant="fab"
        aria-label="add"
        style={buttonColor}
        onClick={() => onClick()}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

FloatButton.proptypes = {
  onClick: PropTypes.func.isRequired
};

export default FloatButton;
