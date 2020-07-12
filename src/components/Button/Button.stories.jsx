/**
 * Base dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ActionButton from '../ActionButton/ActionButton';
import Button from './Button';

/**
 * Styles
 */
import '../../common/_base.scss';

storiesOf('Buttons', module)
  .add('Non styled button', () => {
    return <Button onClick={action('Clicked')} label="I am button" />;
  })
  .add('Action button', () => {
    return <ActionButton label="I am an action button" onClick={action('Clicked!')} />;
  })
  .add('Action button - Light', () => {
    return (
      <ActionButton lightTheme label="I am a light action button" onClick={action('Clicked!')} />
    );
  });
