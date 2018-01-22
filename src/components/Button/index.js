import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Button({children, type, disabled, loading, onButtonClick}) {
  return (
    <button
      className={`btn btn-${type}`}
      disabled={disabled || loading}
      onClick={onButtonClick}>
        {loading ? 'loading...' : children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onButtonClick: PropTypes.func
};

Button.defaultProps = {
  type: 'primary'
};

export default Button;
