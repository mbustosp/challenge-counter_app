/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import OvalButton from '../../atoms/OvalButton';

/**
 * Styles
 */
import './ExamplesScroll.scss';

const ExamplesScroll = ({ titles, onClick, disabled }) => {
  return (
    <div className="examples-scroll">
      {titles.map((title) => (
        <OvalButton onClick={() => onClick(title)} disabled={disabled} label={title} />
      ))}
    </div>
  );
};

ExamplesScroll.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ExamplesScroll.defaultProps = {
  titles: '',
  onClick: () => true,
  disabled: false,
};

export default ExamplesScroll;
