/**
 * Base dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import Main from './Main';

/**
 * Styles
 */
import '../../common/_base.scss';

storiesOf('Pages', module)
  .addDecorator(withKnobs)
  .add('Welcome Page', () => {
    return <Main />;
  });
