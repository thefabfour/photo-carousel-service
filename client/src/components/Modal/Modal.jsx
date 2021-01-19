import React, { useState, useEffect } from 'react';
import classes from './Modal.module.css';

function Modal(props) {
  const [ modalStyle, setModalStyle ] = useState('');
  const { modalOpen, children } = props;
  // const modalStyle = modalOpen ? 'modelopen' : 'modelclose';

  useEffect(() => {
    const newStyle = modalOpen ? 'modelopen' : 'modelclose';
    console.log(newStyle)
    setModalStyle(newStyle);
  }, [modalOpen]);

  return (
    <div className={`${classes.modal} ${classes[modalStyle]}`}>
      {children}
      {`Open: ${modalOpen} ${modalStyle}`}
    </div>
  );
}

export default Modal;
