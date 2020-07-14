/**
 * Base dependencies
 */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { text, number, boolean } from '@storybook/addon-knobs';
import WelcomeScreen from './Welcome';
import SearchBar from './SearchBar';
import Counter from './Counter';
import NoCounters from './NoCounters';
import ErrorLoading from './LoadingError';

/**
 * Styles
 */
import '../../common/_base.scss';

// eslint-disable-next-line react/prop-types
const FullScreen = ({ children }) => (
  <div
    style={{
      minHeight: '100vh',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

storiesOf('Molecules', module)
  .addDecorator(withKnobs)
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
        isSelected={boolean('isSelected', false)}
        onIncrease={(key) => action(`Increasing ${key}`)()}
        onDecrease={(key) => action(`Decreasing ${key}`)()}
        onDelete={(key) => action(`Deleting ${key}`)()}
        onSelection={(key) => action(`Selected ${key}`)()}
      />
    );
  })
  .add('Main Screen - Welcome', () => {
    return (
      <FullScreen>
        <WelcomeScreen onGetStarted={action('Let us get started!')} />
      </FullScreen>
    );
  })
  .add('Main Screen - No Counters', () => (
    <FullScreen>
      <NoCounters />
    </FullScreen>
  ))
  .add('Main Screen - Loading error', () => (
    <FullScreen>
      <ErrorLoading retry={action('Retry!')} />
    </FullScreen>
  ));
