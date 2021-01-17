import React, { useState, useEffect } from 'react';

const PhotoGridItem = (props) => {
  const { photo } = props;

  useEffect( () => {
    console.log('loaded')
  }, []);

  return (
    <div>
      {photo}
    </div>
  );
};

export default PhotoGridItem;
