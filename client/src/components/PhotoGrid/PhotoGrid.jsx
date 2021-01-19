import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './PhotoGrid.module.css';

import PhotoItem from '../PhotoItem/PhotoItem.jsx';
import Button from '../Button/Button.jsx';
import Modal from '../Modal/Modal.jsx';
import PhotoViewer from '../PhotoViewer/PhotoViewer.jsx';

function PhotoGrid(props) {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const photosLoaded = photos.length > 0;
  const {listingId} = props;

  const getPhotos = (id) => {
    axios.get(`/api/home/${id}/photos`)
      .then((response) => {
        setPhotos(response.data[0].photos);
        setSelectedPhoto(response.data[0].photos[0]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhotos(listingId);
  }, []);

  // const test = () => console.log('Made it!'); //! THIS CAN BE REMOVED

  return (
    <div className={classes.photogrid}>
      {/* {photos.slice(0, 5).map((photo) => (
        <PhotoItem
          photo={photo}
          setSelectedPhoto={setSelectedPhoto}
          key={photo.id}
        />
      ))} */}
      <div className={classes.left}>
        {photosLoaded
          ? <PhotoItem photo={photos[0]} setSelectedPhoto={setSelectedPhoto} />
          : null}
      </div>
      <div className={classes.right}>
        <div className={classes.upperright}>
          {photosLoaded
            ? <PhotoItem photo={photos[1]} setSelectedPhoto={setSelectedPhoto} />
            : null}
          {photosLoaded
            ? <PhotoItem photo={photos[3]} setSelectedPhoto={setSelectedPhoto} />
            : null}
        </div>
        <div className={classes.lowerright}>
          {photosLoaded
            ? <PhotoItem photo={photos[2]} setSelectedPhoto={setSelectedPhoto} />
            : null}
          {photosLoaded
            ? <PhotoItem photo={photos[4]} setSelectedPhoto={setSelectedPhoto} />
            : null}
        </div>
      </div>

      <Button type="allphotos" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        Show All Photos
      </Button>

      <Modal modalOpen={modalOpen}>
        <PhotoViewer
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          photos={photos}
        />
        {/* <Button modalOpen={modalOpen} setModalOpen={setModalOpen}>Close</Button>
        <span>{`${selectedPhoto.id} / ${photos.length}`}</span>
        <img src={selectedPhoto.imageUrl} alt={selectedPhoto.description} />
        <span>{selectedPhoto.description}</span> */}
      </Modal>
    </div>
  );
}

export default PhotoGrid;
