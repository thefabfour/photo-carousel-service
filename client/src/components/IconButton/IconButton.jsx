import React from 'react';
import PropTypes from 'prop-types';

import classes from './IconButton.module.css';

function IconButton(props) {
  const {
    children, type, border, large,
  } = props;
  const assignedClasses = `${classes.btn}
    ${border ? classes.borderBtn : null}
    ${large ? classes.large : classes.small}`;

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
