import React, { useState, useEffect } from 'react';

const PhotoItem = (props) => {
  const { photo } = props;
  const { thumbnailUrl, imageUrl, description } = photo;

  // useEffect( () => {
  //   console.log('item loaded')
  // }, []);

  return (
    <img src={thumbnailUrl} alt={description} />
  );
};

export default PhotoItem;
