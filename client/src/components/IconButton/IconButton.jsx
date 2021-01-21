import React from 'react';
import PropTypes from 'prop-types';

import classes from './IconButton.module.css';

function IconButton(props) {
  const {
    children, type, border, large,
  } = props;
  const assignedClasses= `${classes.btn} ${classes[type]} ${classes.borderBtn}`

  return (
    <button type="button" className={assignedClasses}>
      {children}
    </button>
  );
}

export default IconButton;

IconButton.propTypes = {
  // children: PropTypes.string.isRequired,
  // modalOpen: PropTypes.bool.isRequired,
  // setModalOpen: PropTypes.func.isRequired,
};
