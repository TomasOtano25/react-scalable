import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import validator from "validator";
import LinkForm from "../../components/linkForm/LinkForm";
import { addLinkCancelled, addLink } from "./actions";

export class LinkFormContainer extends Component {
  constructor(props) {
    super(props);

    this.updateInput = this.updateInput.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  static propTypes = {
    addLinkCancelled: PropTypes.func.isRequired,
    addLink: PropTypes.func.isRequired,
    topicName: PropTypes.string.isRequired
  };

  state = {
    addForm: {
      url: "",
      description: "",
      topicName: ""
    },
    errors: {
      url: "",
      description: ""
    }
  };

  updateInput(event) {
    const field = event.target.name;
    let addForm = this.state.addForm;
    addForm[field] = event.target.value;
    this.setState({
      addForm: addForm
    });
  }

  onAdd() {
    const { addForm } = this.state;
    let error = {};
    if (!validator.isURL(addForm.url, { require_protocol: true })) {
      error.url = "Please provide valid URL";
    }
    if (addForm.description === "") {
      error.description = "Please provide valid description";
    }

    this.setState({
      errors: error
    });

    if (error.url || error.description) {
      return;
    }

    let state = this.state.addForm;
    state["topicName"] = this.props.topicName;
    this.setState({
      addForm: state
    });

    this.props.addLink(this.state.addForm);
  }

  render() {
    return (
      <div>
        <LinkForm
          {...this.props}
          onAdd={this.onAdd}
          updateInput={this.updateInput}
          addForm={this.state.addForm}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  topicName: ownProps.match.params.topicName
});

const mapDispatchToProps = dispatch => ({
  addLinkCancelled: () => dispatch(addLinkCancelled()),
  addLink: link => dispatch(addLink(link))
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkFormContainer);
