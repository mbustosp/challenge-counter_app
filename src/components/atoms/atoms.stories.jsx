/**
 * Base dependencies
 */
import faker from 'faker';
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import { withKnobs } from '@storybook/addon-knobs/react';
import ActionButton from './ActionButton';
import Button from './Button';
import TextInput from './TextInput';
import SearchInput from './SearchInput';
import CancelButton from './CancelButton';
import RefreshIndicator from './RefreshIndicator';
import ActivityIndicator from './ActivityIndicator';
import PaperNote from './PaperNote';

/**
 * Styles
 */
import '../../common/_base.scss';

/**
 * Data
 */
const counters = Array(10)
  .fill()
  .map((val, key) => ({
    id: `${key}`,
    title: faker.commerce.productName(),
    count: faker.random.number(),
  }));

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('Button - Non styled', () => {
    return (
      <Button
        onClick={action('Clicked')}
        disabled={boolean('disabled', false)}
        label={text('label', 'I am a button')}
      />
    );
  })
  .add('Button - Action', () => {
    return (
      <ActionButton
        label={text('label', 'I am an action button')}
        lightTheme={boolean('lightTheme', false)}
        onClick={action('Clicked!')}
        disabled={boolean('disabled', false)}
      />
    );
  })
  .add('Button - Cancel', () => {
    return (
      <CancelButton
        label={text('label', 'I am a cancel button')}
        onClick={action('Clicked!')}
        disabled={boolean('disabled', false)}
      />
    );
  })
  .add('Text Input', () => {
    return (
      <TextInput
        placeholder={text('placeholder', 'Cups of coffee')}
        value={text('value', '')}
        removeDefaultStyles={boolean('removeDefaultStyles', false)}
        disabled={boolean('disabled', false)}
      />
    );
  })
  .add('Search Input', () => {
    return (
      <SearchInput
        placeholder={text('text', 'Cups of coffee')}
        value={text('value', '')}
        disabled={boolean('disabled', false)}
      />
    );
  })
  .add('Refresh Indicator', () => {
    const [refreshIndicatorActive, setRefreshIndicatorActive] = useState(false);
    return (
      <RefreshIndicator
        isActive={boolean('isActive', refreshIndicatorActive)}
        onClick={() => setRefreshIndicatorActive(!refreshIndicatorActive)}
      />
    );
  })
  .add('Activity Indicator', () => <ActivityIndicator />)
  .add('Paper Note', () => (
    <PaperNote selectedCounters={counters} listMaxLength={number('listMaxLength', 5)} />
  ));
