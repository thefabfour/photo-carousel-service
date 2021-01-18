import React from 'react';

import classes from './PhotoItem.module.css';

function PhotoItem (props) {
  const { photo } = props;
  const { id, thumbnailUrl, imageUrl, description } = photo;

  const handleClick = (event) => {
    console.log('it works!')
  };

  return (
    <button type="button" onClick={handleClick}>
      <img
        src={thumbnailUrl}
        alt={description}
        photo-id={id}
        className={classes.img}
      />
    </button>

  );
}

export default PhotoItem;
