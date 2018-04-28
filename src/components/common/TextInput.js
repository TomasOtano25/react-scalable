import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import TextField from "material-ui/TextField";
import { InputAdornment } from "material-ui/Input";
import classNames from "classnames";

let margin = css({
  margin: "1rem 0 1rem 0"
});

const TextInput = ({
  error,
  name,
  value,
  onChange,
  label,
  helperText,
  children
}) => {
  return (
    <div className={`${margin}`}>
      <TextField
        error={error ? true : false}
        value={value}
        name={name}
        label={label}
        onChange={event => onChange(event)}
        helperText={error ? error : ""}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{children}</InputAdornment>
          )
        }}
      />
    </div>
  );
};

TextInput.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default TextInput;
