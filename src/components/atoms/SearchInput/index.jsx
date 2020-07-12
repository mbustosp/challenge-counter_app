/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import glass from '../../../assets/icons/glass.svg';

/**
 * Styles
 */
import './SearchInput.scss';
import TextInput from '../TextInput';

const SearchInput = ({ value, placeholder, onChange }) => {
  return (
    <div className="search-input">
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
      />
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

SearchInput.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => true,
};

export default SearchInput;
