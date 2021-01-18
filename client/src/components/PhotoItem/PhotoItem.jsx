import React from 'react';

import classes from './PhotoItem.module.css';

function PhotoItem (props) {
  const { photo } = props;
  const { id, thumbnailUrl, imageUrl, description } = photo;

  //onClick handler

  return (
    <img
      src={thumbnailUrl}
      alt={description}
      photo-id={id}
      className={classes.img}
    />
  );
}

export default PhotoItem;
