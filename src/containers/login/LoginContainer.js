import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginPage from "../../components/login/LoginPage";
import { login, cancelLogin } from "./actions";
import * as EmailValidator from "email-validator";

export class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.updateInput = this.updateInput.bind(this);
    this.login = this.login.bind(this);
  }

  static propTypes = {
    login: PropTypes.func.isRequired
  };

  static initialState = {
    loginForm: {
      email: ""
    },
    errors: {}
  };
  state = LoginContainer.initialState;

  updateInput(event) {
    const input = event.target.name;

    this.setState({
      loginForm: {
        [input]: event.target.value
      }
    });
  }

  login(event) {
    event.preventDefault();

    if (!EmailValidator.validate(this.state.loginForm.email)) {
      this.setState({
        errors: {
          email: "Please provide a valid email."
        }
      });
      return;
    }

    this.setState({
      errors: {
        email: null
      }
    });

    this.props.login(this.state.loginForm.email);
  }

  render() {
    return (
      <div>
        <LoginPage
          {...this.props}
          login={this.login}
          updateInput={this.updateInput}
          loginForm={this.state.loginForm}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: email => dispatch(login(email)),
  cancelLogin: () => dispatch(cancelLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
