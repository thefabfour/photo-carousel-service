import React from 'react';
import PropTypes from 'prop-types';
import { IoMdClose, IoShareOutline, IoMdHeartEmpty, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import classes from './PhotoViewer.module.css';

import Button from '../Button/Button.jsx';

function PhotoViewer(props) {
  const {
    modalOpen,
    setModalOpen,
    selectedPhoto,
    setSelectedPhoto,
    photos,
  } = props;

  return (
    <div className={classes.viewer}>
      <Button
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        className={classes.closebtn}
      >
        <IoMdClose />
        Close
      </Button>
      <span className={classes.text}>{`${selectedPhoto.id} / ${photos.length}`}</span>
      <img src={selectedPhoto.imageUrl} alt={selectedPhoto.description} />
      <span className={classes.text}>{selectedPhoto.description}</span>
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
