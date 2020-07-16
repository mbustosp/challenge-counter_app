/**
 * Base dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import MainTemplate from './MainTemplate';
import SplashTemplate from './SplashTemplate';

/**
 * Styles
 */
import '../../common/_base.scss';

storiesOf('Template', module)
  .addDecorator(withKnobs)
  .add('Splash Template', () => (
    <SplashTemplate>
      <div style={{ background: 'black', height: '200vh', width: '100%' }} />
    </SplashTemplate>
  ))
  .add('Main Template', () => {
    return (
      <MainTemplate
        blurContent={boolean('Blur Content', true)}
        blurFooter={boolean('Blur Footer', true)}
        header={<div style={{ background: 'red', height: '80px', width: '100%' }} />}
        content={<div style={{ background: 'black', height: '200vh', width: '100%' }} />}
        footer={<div style={{ background: 'blue', height: '50px', width: '100%' }} />}
      />
    );
  });
