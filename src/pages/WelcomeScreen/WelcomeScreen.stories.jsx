/**
 * Base dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import WelcomeScreen from './WelcomeScreen';

/**
 * Styles
 */
import '../../common/_base.scss';

storiesOf('Welcome Page', module).add('Total', () => {
  return <WelcomeScreen />;
});
