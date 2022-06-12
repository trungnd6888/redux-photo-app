import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import React from 'react';

InpuField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  //
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InpuField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function InpuField(props) {
  const { field, form, type, placeholder, label, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}
        //
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default InpuField;
