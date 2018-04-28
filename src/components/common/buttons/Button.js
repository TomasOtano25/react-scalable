import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";

const ButtonComponent = ({ children, color, variant, onClick }) => {
  return (
    <div>
      <Button color={color} variant={variant} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

export default ButtonComponent;
