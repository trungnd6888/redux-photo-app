import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Images from 'constants/images';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';

PhotoForm.propTypes = {};

function PhotoForm(props) {
  const initialValues = {
    title: '',
    categoryId: '',
  };

  return (
    <Formik initialValues={initialValues}>
      {(formikProps) => {
        // do some thing here
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              //
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              //
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FormGroup>
              <Label for="categoryId">Photo</Label>

              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="200px"
                  height="200px"
                  src={Images.COLORFUL_BG}
                  alt="colorful background"
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
