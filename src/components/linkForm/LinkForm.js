import React from "react";
import styled from "styled-components";
import TextInput from "../common/TextInput";
import Overlay from "../common/Overlay";
import Button from "../common/buttons/Button";
import LinkIcon from "@material-ui/icons/Link";
import DescriptionIcon from "@material-ui/icons/Description";

const Form = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  flex: 0.1 0 0px;
`;

const SectionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LinkForm = ({ errors, addForm, updateInput, cancelAdd }) => {
  return (
    <Overlay>
      <Form>
        <h2>Add a link</h2>
        <TextInput
          error={errors.url}
          value={addForm.url}
          name="url"
          helperText={errors.url}
          onChange={updateInput}
          label="URL"
          margin={true}
        >
          <LinkIcon />
        </TextInput>
        <TextInput
          error={errors.description}
          value={addForm.description}
          name="description"
          helperText={errors.description}
          onChange={updateInput}
          label="Description"
        >
          <DescriptionIcon />
        </TextInput>
        <SectionButtons>
          <Button color="secondary" onClick={cancelAdd}>
            Cancel
          </Button>
          <Button color="secondary" variant="raised">
            Add
          </Button>
        </SectionButtons>
      </Form>
    </Overlay>
  );
};

export default LinkForm;
