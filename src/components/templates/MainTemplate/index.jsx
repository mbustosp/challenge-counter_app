/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Styles
 */
import './MainTemplate.scss';

const MainTemplate = ({ header, content, footer }) => {
  return (
    <div className="main-template">
      <header className="main-template__header">{header}</header>
      <div className="main-template__content">{content}</div>
      <div className="main-template__footer">
        <div className="main-template__footer__content">{footer}</div>
      </div>
    </div>
  );
};

MainTemplate.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default MainTemplate;
