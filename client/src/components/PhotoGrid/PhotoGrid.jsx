import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './PhotoGrid.module.css';

import PhotoItem from '../PhotoItem/PhotoItem.jsx';
import Button from '../Button/Button.jsx';


function PhotoGrid(props) {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const photosLoaded = photos.length > 0;
  const {listingId} = props;
  const allPhotosButtonStyle = {
    position: 'absolute',
    top: '100%',
    left: '100%',
    transform: 'translate(-100%, -100%)',
  }

  useEffect(() => {
    getPhotos(listingId);
  }, []);

  const getPhotos = (id) => {
    axios.get(`/api/home/${id}/photos`)
      .then((response) => setPhotos(response.data[0].photos))
      .catch((error) => console.log(error));
  };

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
        {photosLoaded ? <PhotoItem photo={photos[0]} setSelectedPhoto={setSelectedPhoto} /> : null}
      </div>
      <div className={classes.right}>
        <div className={classes.upperright}>
          {photosLoaded ? <PhotoItem photo={photos[1]} setSelectedPhoto={setSelectedPhoto} /> : null}
          {photosLoaded ? <PhotoItem photo={photos[3]} setSelectedPhoto={setSelectedPhoto} /> : null}
        </div>
        <div className={classes.lowerright}>
          {photosLoaded ? <PhotoItem photo={photos[2]} setSelectedPhoto={setSelectedPhoto} /> : null}
          {photosLoaded ? <PhotoItem photo={photos[4]} setSelectedPhoto={setSelectedPhoto} /> : null}
        </div>
      </div>

      <Button style={allPhotosButtonStyle}>
        Show All Photos
      </Button>
    </div>
  );
}

export default PhotoGrid;
