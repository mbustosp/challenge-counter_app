/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import glass from '../../../assets/icons/glass.svg';
import TextInput from '../TextInput';

/**
 * Styles
 */
import './SearchInput.scss';

const SearchInput = ({ className, value, placeholder, onChange, disabled }) => {
  return (
    <div className={classNames('search-input', { 'search-input--disabled': disabled }, className)}>
      <div className="search-input__icon">
        <img src={glass} alt="search icon" />
      </div>

      <TextInput
        className="search-input__input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        removeDefaultStyles
        disabled={disabled}
      />
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

SearchInput.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => true,
  className: '',
  disabled: false,
};

export default SearchInput;
