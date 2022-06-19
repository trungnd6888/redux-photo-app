import React from "react";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner";
import { Link, useHistory } from "react-router-dom";
import Images from "../../../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector(state => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoEditClick = (photoId) => {
    history.push(`/photos/${photoId}`);
  }

  const handlePhotoRemoveClick = (photoId) => {
    const action = removePhoto(photoId);
    dispatch(action);
  }

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
