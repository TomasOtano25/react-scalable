//rcredux
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LinkList from "../../components/linkList/LinkList";
import { requestLinks, startAdd } from "./actions";

export class LinkListContainer extends Component {
  constructor(props) {
    super(props);

    this.startAdd = this.startAdd.bind(this);
  }

  static propTypes = {
    topicName: PropTypes.string.isRequired,
    requestLinks: PropTypes.func.isRequired,
    startAdd: PropTypes.func.isRequired
  };

  state = {};

  componentDidMount() {
    const { topicName } = this.props;
    this.props.requestLinks(topicName);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.topicName !== nextProps.topicName) {
      this.props.requestLinks(nextProps.topicName);
    }
  }

  startAdd() {
    this.props.startAdd(this.props.topicName);
  }

  render() {
    return (
      <div>
        <LinkList {...this.props} onClick={this.startAdd} />
      </div>
    );
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

  console.log(ownProps);

  return {
    links: state.links,
    topicName: selectTopics().name
  };
};

const mapDispatchToProps = dispatch => ({
  requestLinks: topicName => dispatch(requestLinks(topicName)),
  startAdd: topicName => dispatch(startAdd(topicName))
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
