import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select'
import React from 'react';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    //
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
};

function SelectField(props) {
    const { field, placeholder, label, disabled, options } = props;
    const { name, value } = field;
    const selectedOption = options.find(option => option.value === value)

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            }
        };

        field.onChange(changeEvent);
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                //
                placeholder={placeholder}
                options={options}
                isDisabled={disabled}
            />
        </FormGroup>
    );
}

export default SelectField;
