import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LinkForm from "../../components/linkForm/LinkForm";
import { cancelAdd } from "./actions";

export class LinkFormContainer extends Component {
  constructor(props) {
    super(props);

    this.updateInput = this.updateInput.bind(this);
    this.addLink = this.addLink.bind(this);
  }

  state = {
    addForm: {
      url: "",
      description: ""
    },
    errors: {
      url: "",
      description: ""
    }
  };

  static propTypes = {
    cancelAdd: PropTypes.func.isRequired
  };

  updateInput(event) {
    const field = event.target.name;
    let addForm = this.state.addForm;
    addForm[field] = event.target.value;
    this.setState({
      addForm: addForm
    });
  }

  addLink() {}

  render() {
    return (
      <div>
        <LinkForm
          {...this.props}
          addLink={this.addLink}
          updateInput={this.updateInput}
          addForm={this.state.addForm}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  cancelAdd: () => dispatch(cancelAdd())
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkFormContainer);
