/**
 * Base dependencies
 */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { text, number, boolean, object, array } from '@storybook/addon-knobs';
import WelcomeScreen from './Welcome';
import SearchBar from './SearchBar';
import Counter from './Counter';
import NoCounters from './NoCounters';
import ErrorLoading from './LoadingError';
import ShareTip from './ShareTip';
import Fullscreen from '../../../.storybook/components/Fullscreen';
import NoResults from './NoResults';
import Alert from './Alert';
import Modal from './Modal';
import ActionButton from '../atoms/ActionButton';
import ExamplesModal from './ExamplesModal';
import ExamplesScroll from './ExamplesScroll';

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

storiesOf('Molecules', module)
  .addDecorator(withKnobs)
  .add('Examples scroll', () => {
    const label = 'Examples';
    const defaultValue = ['Red'];

    return (
      <ExamplesScroll titles={array(label, defaultValue)} onClick={(title) => action(title)()} />
    );
  })
  .add('Modal', () => {
    return (
      <Modal
        title={text('title', 'Simple modal')}
        onClose={action('Closing')}
        button={<ActionButton label="Save" />}
      />
    );
  })
  .add('Examples Modal', () => {
    return <ExamplesModal onSelect={action('Selected')} onClose={action('Closing')} />;
  })
  .add('Alert', () => {
    return (
      <Alert
        title={text('title', 'This is an alert')}
        message={text(
          'message',
          'This is a random text message placed here to check how everything fits together',
        )}
      />
    );
  })
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
  .add('Welcome Screen', () => {
    return (
      <Fullscreen>
        <WelcomeScreen onGetStarted={action('Let us get started!')} />
      </Fullscreen>
    );
  })
  .add('Main Screen - No Counters', () => (
    <Fullscreen>
      <NoCounters />
    </Fullscreen>
  ))
  .add('Main Screen - No Results', () => (
    <Fullscreen>
      <NoResults />
    </Fullscreen>
  ))
  .add('Main Screen - Loading error', () => (
    <Fullscreen>
      <ErrorLoading retry={action('Retry!')} />
    </Fullscreen>
  ));
