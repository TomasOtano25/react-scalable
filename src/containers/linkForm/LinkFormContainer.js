import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LinkForm from "../../components/linkForm/LinkForm";

export class LinkListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addForm: {
        url: "",
        description: ""
      },
      errors: {}
    };

    this.updateInput = this.updateInput.bind(this);
  }

  static propTypes = {};

  updateInput(event) {
    const input = event.target.name;

    this.setState({
      addForm: {
        [input]: event.target.value
      }
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
