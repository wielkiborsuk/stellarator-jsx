import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Notification({children, type}) {
  if (['info', 'danger', 'success'].indexOf(type) === -1) {
    type = 'info';
  }

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
