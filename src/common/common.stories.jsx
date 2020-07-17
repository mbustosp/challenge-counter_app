/**
 * Base dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

/**
 * Styles
 */
import './_base.scss';
import './common.stories.scss';

storiesOf('Base styles', module)
  .add('Colors', () => {
    return (
      <ul className="colors-list">
        <li className="colors-list__item">
          <div className="colors-list__item__sample colors-list__item__sample--app-tint" />
          <div className="colors-list__item__name">app-tint</div>
        </li>
        <li className="colors-list__item">
          <div className="colors-list__item__sample colors-list__item__sample--destructive-red" />
          <div className="colors-list__item__name">destructive-red</div>
        </li>
      </ul>
    );
  })
  .add('Typography', () => {
    return (
      <>
        <p>Body</p>
        <h1>Large Title</h1>
        <h1 className="h1--selected-group">Grouped selection Title</h1>
      </>
    );
  });
