/**
 * Core dependencies
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/**
 * Components
 */
import Main from './components/pages/Main';
import SplashTemplate from './components/templates/SplashTemplate';
import Welcome from './components/molecules/Welcome';

/**
 * Styles
 */
import './common/_base.scss';

const App = () => {
  const [showWelcome, setWelcomeVisibility] = useState(true);
  return showWelcome ? (
    <SplashTemplate>
      <Welcome onGetStarted={() => setWelcomeVisibility(!showWelcome)} />
    </SplashTemplate>
  ) : (
    <Main />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
