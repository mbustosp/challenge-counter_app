/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Styles
 */
import './TextInput.scss';

const TextInput = ({ value, placeholder, onChange, className, removeDefaultStyles }) => {
  return (
    <input
      className={classNames({ 'text-input': !removeDefaultStyles }, className)}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  removeDefaultStyles: PropTypes.bool,
};

TextInput.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => true,
  className: '',
  removeDefaultStyles: false,
};

export default TextInput;
