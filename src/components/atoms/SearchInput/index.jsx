/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextInput from '../TextInput';

/**
 * Styles
 */
import './SearchInput.scss';

const SearchInput = ({ className, value, placeholder, onChange, disabled, onFocus, onBlur }) => {
  return (
    <div className={classNames('search-input', { 'search-input--disabled': disabled }, className)}>
      <div className="search-input__icon">
        <span className="icon icon-glass" />
      </div>

      <TextInput
        className="search-input__input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        removeDefaultStyles
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

SearchInput.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => true,
  onFocus: () => true,
  onBlur: () => true,
  className: '',
  disabled: false,
};

export default SearchInput;
