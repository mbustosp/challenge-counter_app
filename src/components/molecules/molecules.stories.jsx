/**
 * Base dependencies
 */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import WelcomeScreen from './Welcome';
import SearchBar from './SearchBar';

/**
 * Styles
 */
import '../../common/_base.scss';

storiesOf('Molecules', module)
  .addDecorator(withKnobs)
  .add('Welcome', () => {
    return <WelcomeScreen onGetStarted={action('Let us get started!')} />;
  })
  .add('SearchBar', () => {
    const [searchBarText, setSearchBarText] = useState('');
    return (
      <SearchBar
        value={searchBarText}
        onChange={(value) => setSearchBarText(value)}
        onCancel={() => setSearchBarText('')}
      />
    );
  });
