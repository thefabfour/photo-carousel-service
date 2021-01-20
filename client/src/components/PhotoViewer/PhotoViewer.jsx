import React from 'react';
import PropTypes from 'prop-types';
import { IoMdClose, IoMdHeartEmpty, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoShareOutline } from "react-icons/io5";

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
    <div className={`${classes.viewer}`}>
      {/* TOP ROW */}
      <div className={`${classes.top} ${classes.row}`}>
        <div>
          <Button
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            className={classes.closebtn}
          >
            <IoMdClose />
            Close
          </Button>
        </div>
        <div>
          <p className={classes.text}>{`${selectedPhoto.id} / ${photos.length}`}</p>
        </div>
        <div>
          {/* //TODO This will need to be changed to a button */}
          <IoShareOutline />
          {/* //TODO This will need to be changed to a button */}
          <IoMdHeartEmpty />
        </div>
      </div>
      {/* MIDDLE ROW */}
      <div className={`${classes.middle} ${classes.row}`}>
        <div className={classes.centerhorizontal}>
          {/* //TODO This will need to be changed to a button */}
          <IoIosArrowBack />
        </div>
        <div className={classes.centerhorizontal}>
          <img
            src={selectedPhoto.imageUrl}
            alt={selectedPhoto.description}
            className={classes.photo}
          />
        </div>
        <div className={classes.centerhorizontal}>
          {/* //TODO This will need to be changed to a button */}
          <IoIosArrowForward />
        </div>
      </div>
      {/* BOTTOM ROW */}
      <div className={`${classes.bottom}`}>
        <div>
          <p className={classes.text}>{selectedPhoto.description}</p>
        </div>
      </div>
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
