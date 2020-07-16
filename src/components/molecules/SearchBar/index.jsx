/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Animate } from 'react-animate-mount';
import SearchInput from '../../atoms/SearchInput';
import CancelButton from '../../atoms/CancelButton';

/**
 * Styles
 */
import './SearchBar.scss';

const SearchBar = ({ value, onChange, onCancel, isActive, onFocus, onBlur }) => {
  return (
    <div className="search-bar">
      <div className="search-bar__search-input">
        <SearchInput
          value={value}
          onChange={onChange}
          placeholder="Search Counters"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      <Animate show={value !== '' || isActive} type="fade">
        <div className="search-bar__cancel">
          <CancelButton onClick={onCancel} label="Cancel" />
        </div>
      </Animate>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isActive: PropTypes.bool,
};

SearchBar.defaultProps = {
  value: '',
  onChange: () => true,
  onCancel: () => true,
  onFocus: () => true,
  onBlur: () => true,
  isActive: false,
};

export default SearchBar;
