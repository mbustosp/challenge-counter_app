/**
 * Core dependencies
 */
import React from 'react';
import challengeLogo from '../../assets/challenge_logo.svg';

/**
 * Styles
 */
import './WelcomeScreen.scss';

const WelcomeScreen = () => {
  return (
    <section className="welcome-screen">
      <div className="welcome-screen__logo">
        <img src={challengeLogo} alt="Counters logo" />
      </div>
      <div className="welcome-screen__message">
        <h1 className="welcome-screen__message__title">Welcome to Counters</h1>
        <p className="welcome-screen__message__description">
          Capture cups of lattes, frapuccinos, or anything else that can be counted.
        </p>
      </div>
      <div className="welcome-screen__button">
        <button type="button">Get Started</button>
      </div>
    </section>
  );
};

export default WelcomeScreen;
