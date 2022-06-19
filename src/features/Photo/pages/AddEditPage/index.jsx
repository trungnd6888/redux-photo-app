import React from "react";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import "./AddEditPage.scss";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addPhoto, editPhoto } from "features/Photo/photoSlice";
import { useHistory, useParams } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const photos = useSelector(state => state.photos);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const photoId = params.photoId;
  const photoEdit = photos.find(photo => photo.id === +photoId);
  const isAdd = !photoId ? true : false;

  let initialValues =
    isAdd ? {
      id: Math.random() * 2000,
      title: '',
      categoryId: null,
      photo: '',
    }
      :
      {
        id: +photoId,
        title: photoEdit.title,
        categoryId: photoEdit.categoryId,
        photo: photoEdit.photo,
      }


  const handleSubmit = (values) => {
    let photoPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    })

    photoPromise.then(() => {
      console.log('Form submit: ', values);
      if (isAdd) {
        const action = addPhoto(values);
        dispatch(action);
      }
      else {
        const action = editPhoto(values);
        dispatch(action);
      }

      history.push('/photos');
    }).catch(
      () => {
        throw new Error('has error');
      }
    )
  }

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />

      <div className="photo-edit__form">
        <PhotoForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isAdd={isAdd}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
