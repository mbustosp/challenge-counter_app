/**
 * Base dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import WelcomeScreen from './index';

/**
 * Styles
 */
import '../../../common/_base.scss';

storiesOf('Molecules', module).add('Welcome', () => {
  return <WelcomeScreen onGetStarted={action('Let us get started!')} />;
});
