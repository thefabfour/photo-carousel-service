import React, { useState, useEffect } from 'react';

const PhotoGrid = () => {
  const [ photos, setPhotos ] = useState([]);

  useEffect( () => {
    console.log('loaded')
  }, []);

  return(
    <div>
      test
    </div>
  )
}

export default PhotoGrid;