import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestTopics, selectTopic } from "./actions";
import { getTopics } from "./selectors";
import HomePage from "../../components/home/HomePage";
import LinkListContainer from "../../containers/linkList/LinkListContainer";

class CoursesPage extends Component {
  static propTypes = {
    requestTopics: PropTypes.func.isRequired
  };

  state = {};

  componentDidMount() {
    this.props.requestTopics();
    console.log(this.props.topics);
  }

  render() {
    console.log(this.props.topics);
    return (
      <div>
        <HomePage {...this.props} />
        <LinkListContainer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topics: state.topics
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: topic => dispatch(selectTopic(topic))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
