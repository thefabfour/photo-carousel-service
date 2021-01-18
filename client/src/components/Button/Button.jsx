import React from 'react';

function Button (props) {
  const {children} = props;

  return (
    <label></label>
    <button>
      {children}
    </button>
  );
}

export default Button;
