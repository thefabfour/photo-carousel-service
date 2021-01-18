import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PhotoItem from '../PhotoItem/PhotoItem.jsx';
import Button from '../Button/Button.jsx';


const PhotoGrid = (props) => {
  const [photos, setPhotos] = useState([]);
  const {listingId} = props;

  useEffect(() => {
    getPhotos(listingId);
  }, []);

  const getPhotos = (id) => {
    axios.get(`/api/home/${id}/photos`)
      .then((response) => setPhotos(response.data[0].photos))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {photos.slice(0, 5).map((photo) => <PhotoItem photo={photo} key={photo.id} />)}
      <Button />
    </div>
  );
};

export default PhotoGrid;
