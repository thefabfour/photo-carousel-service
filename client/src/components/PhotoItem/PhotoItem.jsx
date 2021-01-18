import React from 'react';

const PhotoItem = (props) => {
  const { photo } = props;
  const { id, thumbnailUrl, imageUrl, description } = photo;

  return (
    <img src={thumbnailUrl} alt={description} photo-id={id} />
  );
};

export default PhotoItem;
