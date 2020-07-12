/**
 * Base dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Index from '../ActionButton';
import Button from './index';

/**
 * Styles
 */
import '../../../common/_base.scss';

storiesOf('Atoms', module)
  .add('Button - Non styled', () => {
    return <Button onClick={action('Clicked')} label="I am button" />;
  })
  .add('Button - Action', () => {
    return <Index label="I am an action button" onClick={action('Clicked!')} />;
  })
  .add('Button - Action - Light', () => {
    return <Index lightTheme label="I am a light action button" onClick={action('Clicked!')} />;
  });
