import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

function Button (props) {
  const {children, type} = props;

  return (
    <button type="button" className={`${classes.btn} ${classes[type]}`}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
