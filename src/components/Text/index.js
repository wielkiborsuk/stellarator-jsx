import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Text({children, heading, size}) {
  let Tag, classes;

  // it makes sense to use actual headings as a semantic marking of chapter/section border
  if (heading) {
    Tag = {'large': `h1`, 'medium': `h2`, 'small': `h3`}[size];
    classes = `text`
  } else {
    Tag = `p`;
    classes = `text ${size}`
  }

  return <Tag className={classes}>{children}</Tag>
};

Text.propTypes = {
  heading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Text.defaultProps = {
  heading: false,
  size: 'medium'
}

export default Text;
