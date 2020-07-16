/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Styles
 */
import './MainTemplate.scss';

const MainTemplate = ({ header, content, footer, blurContent, blurFooter }) => {
  return (
    <div className="main-template">
      <header className="main-template__header">{header}</header>
      <div
        className={classNames('main-template__content', {
          'main-template__content--blur': blurContent,
        })}
      >
        {content}
      </div>
      <hr />
      <div
        className={classNames('main-template__footer', {
          'main-template__footer--blur': blurFooter,
        })}
      >
        <div className="main-template__footer__content">{footer}</div>
      </div>
    </div>
  );
};

MainTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  blurContent: PropTypes.bool,
  blurFooter: PropTypes.bool,
};

MainTemplate.defaultProps = {
  blurContent: false,
  blurFooter: false,
};

export default MainTemplate;
