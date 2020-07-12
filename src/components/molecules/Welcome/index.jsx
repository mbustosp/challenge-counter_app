/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import challengeLogo from '../../../assets/challenge_logo.svg';
import ActionButton from '../../atoms/ActionButton';

/**
 * Styles
 */
import './Welcome.scss';

const Welcome = ({ onGetStarted }) => {
  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img src={challengeLogo} alt="Counters logo" />
      </div>
      <div className="welcome__message">
        <h1 className="welcome__message__title">Welcome to Counters</h1>
        <p className="welcome__message__description">
          Capture cups of lattes, frapuccinos, or anything else that can be counted.
        </p>
      </div>
      <div className="welcome__button">
        <ActionButton label="Get Started" onClick={onGetStarted} />
      </div>
    </section>
  );
};

Welcome.propTypes = {
  onGetStarted: PropTypes.func,
};

Welcome.defaultProps = {
  onGetStarted: () => true,
};

export default Welcome;
