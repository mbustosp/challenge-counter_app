/**
 * Base dependencies
 */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import WelcomeScreen from './Welcome';
import SearchBar from './SearchBar';

/**
 * Styles
 */
import '../../common/_base.scss';

storiesOf('Molecules', module)
  .add('Welcome', () => {
    return <WelcomeScreen onGetStarted={action('Let us get started!')} />;
  })
  .add('SearchBar with no text', () => {
    return <SearchBar />;
  })
  .add('SearchBar with text', () => {
    return <SearchBar value="Empanadas de queso" />;
  })
  .add('SearchBar - Dynamic', () => {
    const [text, setText] = useState('');
    return (
      <SearchBar value={text} onChange={(value) => setText(value)} onCancel={() => setText('')} />
    );
  });
