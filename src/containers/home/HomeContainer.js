import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestTopics, selectTopic, toogleDrawer } from "./actions";
import HomePage from "../../components/home/HomePage";

class CoursesPage extends Component {
  static propTypes = {
    requestTopics: PropTypes.func.isRequired
  };

  state = {};

  componentDidMount() {
    this.props.requestTopics();
  }

  render() {
    return (
      <div>
        <HomePage {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topics: state.topics,
    isDrawerOpen: state.isDrawerOpen,
    email: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: topic => dispatch(selectTopic(topic)),
    toogleDrawer: () => dispatch(toogleDrawer())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
