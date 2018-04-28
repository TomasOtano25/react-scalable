import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import EmailIcon from "@material-ui/icons/Email";
import LoginBackground from "../../loginBackground.jpeg";
import classNames from "classnames";

import TextInput from "../common/TextInput";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${LoginBackground});
`;

const Registrer = styled.div`
  background-color: #fff;
  height: 80%;
  border-radius: 0.5rem;
  padding: 1rem;
  flex: 0.1 1 290px;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: normal;
`;

const Input = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginButtons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const styles = () => ({
  button: {
    borderRadius: "30px",
    width: "180px",
    marginTop: "1rem"
  },
  input: {
    flex: "0.8 0 150px"
  },
  buttonLogin: {
    marginBottom: "1rem",
    flex: "0.3 1 225px"
  }
});

const LoginPage = ({
  classes,
  login,
  updateInput,
  loginForm,
  errors,
  cancelLogin
}) => {
  return (
    <Background>
      <Registrer>
        <Title>Registrer</Title>
        <LoginButtons>
          <Button
            className={classes.buttonLogin}
            variant="raised"
            color="primary"
          >
            Sign in with Facebook
          </Button>
          <Button
            className={classes.buttonLogin}
            variant="raised"
            color="secondary"
          >
            Sign in with Google
          </Button>
        </LoginButtons>
        <span>OR</span>
        <form>
          <Input>
            <TextInput
              error={errors.email}
              value={loginForm.email}
              name="email"
              helperText={errors.email}
              onChange={updateInput}
              label="Email"
            >
              <EmailIcon />
            </TextInput>
          </Input>
          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            onClick={login}
          >
            Log In
          </Button>
          <Button
            variant="raised"
            color="default"
            className={classes.button}
            onClick={cancelLogin}
          >
            Cancelar
          </Button>
        </form>
      </Registrer>
    </Background>
  );
};

LoginPage.proptypes = {
  cancelLogin: PropTypes.func.isRequired
};

export default withStyles(styles)(LoginPage);
