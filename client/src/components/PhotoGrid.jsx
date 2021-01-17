import React, { useState, useEffect } from 'react';
import PhotoGridItem from './PhotoGridItem.jsx';


const PhotoGrid = () => {
  const [ photos, setPhotos ] = useState([]);

  useEffect( () => {
    console.log('loaded')
    setPhotos(['hello', 'world'])
  }, []);

  return (
    <div>
      {photos.map((photo, index) => <PhotoGridItem photo={photo} />)}
    </div>
  );
};

export default PhotoGrid;
