/**
 * Base dependencies
 */
import React, { useReducer } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
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
const counters = [
  {
    id: '1',
    title: 'Cups of Coffee',
    count: 5,
    isSelected: false,
  },
  {
    id: '2',
    title: 'Records Played',
    count: 10,
    isSelected: false,
  },
  {
    id: '3',
    title: 'Number of times I’ve forgotten my mother’s name because I was high on Frugelés.',
    count: 2,
    isSelected: false,
  },
  {
    id: '4',
    title: 'Apples Eaten',
    count: 0,
    isSelected: false,
  },
];

storiesOf('Organisms', module)
  .addDecorator(withKnobs)
  .add('CounterList', () => {
    const [state, dispatch] = useReducer(appReducer, { counters });

    return (
      <mainScreenContext.Provider value={{ dispatch }}>
        <CounterList counters={state.counters} />
      </mainScreenContext.Provider>
    );
  });
