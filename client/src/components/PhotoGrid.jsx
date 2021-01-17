import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoItem from './PhotoItem.jsx';


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
      {/* {console.log(photos)} */}
      {photos.map((photo, index) => <PhotoItem photo={photo}/>)}
    </div>
  );
};

export default PhotoGrid;
