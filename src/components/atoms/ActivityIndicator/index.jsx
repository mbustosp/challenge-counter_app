/**
 * Core dependencies
 */
import React from 'react';
import { Animate } from 'react-animate-mount';
import activityIndicatorLogo from '../../../assets/activity_indicator.svg';

/**
 * Styles
 */
import './ActivityIndicator.scss';

const ActivityIndicator = () => {
  return (
    <Animate show appear type="fade">
      <div className="activity-indicator">
        <img className="activity-indicator__logo" src={activityIndicatorLogo} alt="Loading..." />
      </div>
    </Animate>
  );
};

ActivityIndicator.propTypes = {};

export default ActivityIndicator;
