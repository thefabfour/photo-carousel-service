import React from 'react';
import PropTypes from 'prop-types';

import classes from './PhotoItem.module.css';

function PhotoItem (props) {
  const { photo } = props;
  const { id, thumbnailUrl, imageUrl, description } = photo;

  const handleClick = (event) => {
    console.log('it works!')
  };

  return (
    <button type="button" onClick={handleClick} className={classes.photoitem}>
      <img
        src={thumbnailUrl}
        alt={description}
        photo-id={id}
        className={
          `${classes.photo}
          ${id === 1 ? classes.photoitemleft : ''}
          ${id === 4 ? classes.photoitemtopright : ''}
          ${id === 5 ? classes.photoitembottomright : ''}`
        }
      />
    </button>
  );
}

export default PhotoItem;

PhotoItem.propTypes = {
  photo: PropTypes.object.isRequired,
};
