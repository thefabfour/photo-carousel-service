import React from 'react';

function Button (props) {
  const {label, children} = props;

  return (
    <label></label>
    <button>
      {children}
      {label}
    </button>
  );
}

export default Button;
