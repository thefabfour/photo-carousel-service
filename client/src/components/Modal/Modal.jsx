import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.module.css';

function Modal(props) {
  // const [ modalStyle, setModalStyle ] = useState('modelclose');
  const { modalOpen, children } = props;
  // const modalStyle = modalOpen ? 'modelopen' : 'modelclose';
  const modalStyle = modalOpen ? 'modelopen' : 'modelclose';

  return (
    <div className={`${classes.modal} ${classes[modalStyle]}`}>
      {children}
      {`Open: ${modalOpen} ${modalStyle}`/*! THIS IS FOR TESTING ONLY! */}
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  modalOpen: PropTypes.bool.isRequired,
};
