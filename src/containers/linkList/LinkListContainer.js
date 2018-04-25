//rcredux
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LinkList from "../../components/linkList/LinkList";
import { requestLinks } from "./actions";

export class LinkListContainer extends Component {
  static propTypes = {
    topicName: PropTypes.string.isRequired,
    requestLinks: PropTypes.func.isRequired
  };

  state = {};

  componentDidMount() {
    this.props.requestLinks(this.props.topicName);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.topicName !== nextProps.topicName) {
      this.props.requestLinks(nextProps.topicName);
      console.log(nextProps.topicName);
    }
  }

  render() {
    //console.log(this.props.routeTopicName);
    return <LinkList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const selectTopics = () => {
    const selectedTopic = state.topics.find(
      t => t.name === ownProps.match.params.topicName
    );

    return (
      selectedTopic || {
        name: ""
      }
    );
  };

  return {
    links: state.links,
    topicName: selectTopics().name
    /* selectTopic: ,ownProps.match.params.topicName*/
  };
};

const mapDispatchToProps = dispatch => ({
  requestLinks: topicName => dispatch(requestLinks(topicName))
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
