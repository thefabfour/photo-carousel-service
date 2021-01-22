import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { CgLayoutGridSmall } from 'react-icons/cg';

import classes from './PhotoGrid.module.css';

import PhotoItem from '../PhotoItem/PhotoItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import PhotoViewer from '../PhotoViewer/PhotoViewer';

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

  return (
    <div className={classes.photogrid}>

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

      <div className={classes.btnContainer}>
        <Button type="allphotos" modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <CgLayoutGridSmall className={classes.icon} />
          Show All Photos
        </Button>
      </div>

      <Modal modalOpen={modalOpen}>
        <PhotoViewer
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          photos={photos}
        />
      </Modal>
    </div>
  );
}

export default PhotoGrid;

PhotoItem.propTypes = {
  listingId: PropTypes.string.isRequired,
};
