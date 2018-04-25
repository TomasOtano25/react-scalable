//rcredux
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LinkList from "../../components/linkList/LinkList";
import { requestLink } from "./actions";

export class LinkListContainer extends Component {
  static propTypes = {};

  state = {};

  componentWillReceiveProps(nextProps) {
    //this.props.requestLink(this.props.routeTopicName);
  }

  render() {
    console.log(this.props.routeTopicName);
    return <LinkList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  links: state.links,
  selectTopics: [],
  routeTopicName: ownProps.match.params.topicName
});

const mapDispatchToProps = dispatch => ({
  requestLink: topicName => dispatch(requestLink(topicName))
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
