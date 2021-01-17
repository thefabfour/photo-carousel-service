import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoGridItem from './PhotoGridItem.jsx';


const PhotoGrid = (props) => {
  const [photos, setPhotos] = useState([]);
  const {listingId} = props;

  useEffect( () => {
    console.log('component loaded');
    // setPhotos(['hello', 'world'])
    getPhotos(listingId);
  }, []);

  const getPhotos = (id) => {
    axios.get(`/api/home/${30506101}/photos`)
      .then((response) => setPhotos(response.data[0].photos))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* {console.log(photos)} */}
      {photos.map((photo, index) => <PhotoGridItem photo={photo} />)}
    </div>
  );
};

export default PhotoGrid;
