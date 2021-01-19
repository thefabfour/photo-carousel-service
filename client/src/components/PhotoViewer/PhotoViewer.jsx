import React from 'react';
import PropTypes from 'prop-types';

import classes from './PhotoViewer.module.css';

function PhotoViewer(props) {
  const {
    modalOpen,
    setModalOpen,
    selectedPhoto,
    setSelectedPhoto,
    photos,
  } = props;

  return (
    <div>
      <Button modalOpen={modalOpen} setModalOpen={setModalOpen}>Close</Button>
      <span>{`${selectedPhoto.id} / ${photos.length}`}</span>
      <img src={selectedPhoto.imageUrl} alt={selectedPhoto.description} />
      <span>{selectedPhoto.description}</span>
    </div>
  );
}

export default PhotoViewer;

PhotoViewer.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  selectedPhoto: PropTypes.shape({
    id: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    room: PropTypes.string,
  }).isRequired,
  setSelectedPhoto: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
