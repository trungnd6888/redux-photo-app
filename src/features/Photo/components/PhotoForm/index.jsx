import React from 'react';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import { Button, FormGroup, Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  isAdd: PropTypes.bool,
}

PhotoForm.defaultProps = {
  onSubmit: null,
  initialValues: null,
  isAdd: false,
}

function PhotoForm(props) {
  const { initialValues, isAdd } = props;

  let schema = Yup.object().shape({
    title: Yup.string().required("This field is required"),
    categoryId: Yup.number().nullable().required("This field is required"),
    photo: Yup.string().when('categoryId',
      {
        is: 1,
        then: Yup.string().required("This field is required"),
        otherwise: Yup.string().notRequired(),
      }
    )
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={schema}>
      {(formikProps) => {
        // do some thing here
        const { values, errors, touched, isSubmitting } = formikProps;
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

            <FastField
              name="photo"
              component={RandomPhotoField}

              //
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={Boolean(isAdd) ? "primary" : "success"}>
                {isSubmitting && <Spinner size="sm" className="mr-1" />}
                {Boolean(isAdd) ? 'Add to album' : 'Update to album'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
