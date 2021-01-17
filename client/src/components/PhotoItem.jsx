import React from 'react';

const PhotoItem = (props) => {
  const { photo } = props;
  const { thumbnailUrl, imageUrl, description } = photo;

  return (
    <img src={thumbnailUrl} alt={description} />
  );
};

export default PhotoItem;
