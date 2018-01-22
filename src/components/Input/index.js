import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Input({children, type, name, placeholder, label, value, size, error, onInputChange}) {
  let Tag = (type === 'textarea' ? 'textarea' : 'input');
  return (
    <div className={`input ${size} ${error ? 'error' : ''}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <Tag
        type={type}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onInputChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['email', 'text', 'phone', 'textarea', 'password']),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  error: PropTypes.string,
  onInputChange: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  size: 'medium'
};

export default Input;
