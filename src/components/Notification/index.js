import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Notification({children, type}) {
  return (
    <div className={`notification ${type}`}>
      {children}
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(['info', 'danger', 'success'])
};

Notification.defaultProps = {
  type: 'info'
};

export default Notification;
