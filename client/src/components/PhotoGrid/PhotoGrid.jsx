import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CgLayoutGridSmall } from 'react-icons/cg';

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

  // const test = () => console.log('Made it!'); //! THIS WILL BE REMOVED

  return (
    <div className={classes.photogrid}>
      {/* {photos.slice(0, 5).map((photo) => ( //!THIS SECTION WILL BE REMOVED
        <PhotoItem
          photo={photo}
          setSelectedPhoto={setSelectedPhoto}
          key={photo.id}
        /> //! END REMOVE SECTION
      ))} */}
      {photosLoaded
        ? (
          <div className={classes.left}>
            {photosLoaded
              ? (
                <PhotoItem
                  photo={photos[0]}
                  setSelectedPhoto={setSelectedPhoto}
                  setModalOpen={setModalOpen}
                />
              )
              : null}
          </div>
        )
        : null}
      {photosLoaded
        ? (
          <div className={classes.right}>
            <div className={classes.upperright}>
              <PhotoItem
                photo={photos[1]}
                setSelectedPhoto={setSelectedPhoto}
                setModalOpen={setModalOpen}
              />
              <PhotoItem
                photo={photos[3]}
                setSelectedPhoto={setSelectedPhoto}
                setModalOpen={setModalOpen}
              />
            </div>
            <div className={classes.lowerright}>
              <PhotoItem
                photo={photos[2]}
                setSelectedPhoto={setSelectedPhoto}
                setModalOpen={setModalOpen}
              />
              <PhotoItem
                photo={photos[4]}
                setSelectedPhoto={setSelectedPhoto}
                setModalOpen={setModalOpen}
              />
            </div>
          </div>
        )
        : null}

      <Button type="allphotos" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <CgLayoutGridSmall className={classes.icon} />
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
