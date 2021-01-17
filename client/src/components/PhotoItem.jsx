import React, { useState, useEffect } from 'react';

const PhotoItem = (props) => {
  const { thumbnailUrl, imageUrl, description } = props.photo;

  // useEffect( () => {
  //   console.log('item loaded')
  // }, []);

  return (
    <img src={thumbnailUrl} alt={description} />
  );
};

export default PhotoItem;
