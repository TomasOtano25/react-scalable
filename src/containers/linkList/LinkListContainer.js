//rcredux
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LinkList from "../../components/linkList/LinkList";

export class LinkListContainer extends Component {
  static propTypes = {};

  render() {
    return <LinkList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  links: state.links
});

//const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps /*, mapDispatchToProps*/)(
  LinkListContainer
);
