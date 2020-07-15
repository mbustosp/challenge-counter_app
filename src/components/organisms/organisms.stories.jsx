/**
 * Base dependencies
 */
import React, { useReducer } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import faker from 'faker';
import CounterList from './CounterList';

/**
 * Styles
 */
import '../../common/_base.scss';

/**
 * State
 */
import mainScreenContext from '../../state/context';
import appReducer from '../../state/reducer';

/**
 * Data
 */
const counters = Array(100)
  .fill()
  .map((val, key) => ({
    id: `${key}`,
    title: faker.commerce.productName(),
    count: faker.random.number(),
    isSelected: false,
  }));

storiesOf('Organisms', module)
  .addDecorator(withKnobs)
  .add('CounterList', () => {
    const [state, dispatch] = useReducer(appReducer, Object.freeze({ counters }));
    console.log('Updating');
    return (
      <mainScreenContext.Provider value={{ dispatch }}>
        <CounterList counters={state.counters} />
      </mainScreenContext.Provider>
    );
  });
