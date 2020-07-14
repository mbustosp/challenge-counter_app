/**
 * Base dependencies
 */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { text, number } from '@storybook/addon-knobs';
import WelcomeScreen from './Welcome';
import SearchBar from './SearchBar';
import Counter from './Counter';

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
  })
  .add('Counter', () => {
    return (
      <Counter
        id={text('id', 'EMP-QUE-01')}
        name={text('name', 'Empanadas de queso')}
        value={number('count', 2)}
        onIncrease={(key) => action(`Increasing ${key}`)()}
        onDecrease={(key) => action(`Decreasing ${key}`)()}
        onDelete={(key) => action(`Deleting ${key}`)()}
        onSelection={(key) => action(`Selected ${key}`)()}
      />
    );
  });
