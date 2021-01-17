import React, { useState, useEffect } from 'react';

const PhotoGridItem = (props) => {
  const { thumbnailUrl, imageUrl, description } = props.photo;

  // useEffect( () => {
  //   console.log('item loaded')
  // }, []);

  return (
    <div>
      <img src={imageUrl} alt={description} />
    </div>
  );
};

export default PhotoGridItem;
