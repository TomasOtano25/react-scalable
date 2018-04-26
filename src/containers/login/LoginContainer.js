import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginPage from "../../components/login/LoginPage";

export class LoginContainer extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div>
        <LoginPage {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
