/**
 * Base dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import faker from 'faker';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import CounterList from './CounterList';
import Fullscreen from '../../../.storybook/components/Fullscreen';
import ActionMenu from './ActionMenu';
import { getSelected } from '../../utils/counterUtils';

/**
 * Styles
 */
import '../../common/_base.scss';

/**
 * Data
 */
const counters = Array(100)
  .fill()
  .map((val, key) => ({
    id: `${key}`,
    title: faker.commerce.productName(),
    count: faker.random.number(),
    isSelected: faker.random.number(1) === 1,
  }));

storiesOf('Organisms', module)
  .addDecorator(withKnobs)
  .add('Action Menu', () => {
    const label = 'Selected Counters';
    const groupId = 'GROUP-ID1';

    return (
      <Fullscreen>
        <ActionMenu
          onAdd={action('Add')}
          onDelete={action('Delete')}
          selectedCounters={object(label, counters, groupId)}
        />
      </Fullscreen>
    );
  })
  .add('CounterList', () => {
    return (
      <CounterList
        counters={counters}
        selectedCount={getSelected(counters).length}
        onDecrease={(id) => action(`Decreasing ${id}`)()}
        onIncrease={(id) => action(`Increasing ${id}`)()}
        onSelect={(id) => action(`On Select ${id}`)()}
        onRefresh={action('Refreshing')}
      />
    );
  });
