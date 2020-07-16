/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Animate } from 'react-animate-mount';
import Button from '../Button';

/**
 * Styles
 */
import './RefreshIndicator.scss';

const RefreshIndicator = ({ isActive, onClick }) => {
  const button = (
    <Button onClick={onClick} ariaLabel="refresh" className="refresh-indicator__button">
      <span className="icon icon-refresh" />
    </Button>
  );

  const message = (
    <Animate show appear type="fade">
      <div className="refresh-indicator">
        <span className="refresh-indicator__icon icon icon-refresh" />
        <div className="refresh-indicator__message">Refreshing...</div>
      </div>
    </Animate>
  );

  return isActive ? message : button;
};

RefreshIndicator.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

RefreshIndicator.defaultProps = {
  isActive: false,
  onClick: () => true,
};

export default RefreshIndicator;
