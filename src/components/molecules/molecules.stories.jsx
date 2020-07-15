/**
 * Base dependencies
 */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { text, number, boolean, object } from '@storybook/addon-knobs';
import WelcomeScreen from './Welcome';
import SearchBar from './SearchBar';
import Counter from './Counter';
import NoCounters from './NoCounters';
import ErrorLoading from './LoadingError';
import ActionMenu from './ActionMenu';
import ShareTip from './ShareTip';

/**
 * Styles
 */
import '../../common/_base.scss';

/**
 * Data
 */
const selectedCounters = [
  {
    id: '1',
    title: 'Cups of Coffee',
    count: 5,
  },
  {
    id: '2',
    title: 'Records Played',
    count: 10,
  },
];

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
  .add('Share Tip', () => {
    const label = 'Selected Counters';
    const defaultValue = {
      selectedCounters,
    };
    const groupId = 'GROUP-SHARE-TIP';

    return <ShareTip selectedCounters={object(label, defaultValue.selectedCounters, groupId)} />;
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
        title={text('title', 'Empanadas de queso')}
        value={number('count', 2)}
        isSelected={boolean('isSelected', false)}
        onIncrease={(key) => action(`Increasing ${key}`)()}
        onDecrease={(key) => action(`Decreasing ${key}`)()}
        onDelete={(key) => action(`Deleting ${key}`)()}
        onSelection={(key) => action(`Selected ${key}`)()}
      />
    );
  })
  .add('Action Menu', () => {
    const label = 'Selected Counters';
    const defaultValue = {
      selectedCounters,
    };
    const groupId = 'GROUP-ID1';

    return (
      <FullScreen>
        <ActionMenu
          onAdd={action('Add')}
          onDelete={action('Delete')}
          selectedCounters={object(label, defaultValue.selectedCounters, groupId)}
        />
      </FullScreen>
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
