import React from 'react';

import classes from './Button.module.css';

function Button (props) {
  const {children} = props;

  return (
    <button type="button">
      {children}
    </button>
  );
}

export default Button;
