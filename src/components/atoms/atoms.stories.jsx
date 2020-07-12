/**
 * Base dependencies
 */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ActionButton from './ActionButton';
import Button from './Button';
import TextInput from './TextInput';
import SearchInput from './SearchInput';

/**
 * Styles
 */
import '../../common/_base.scss';

storiesOf('Atoms', module)
  .add('Button - Non styled', () => {
    return <Button onClick={action('Clicked')} label="I am button" />;
  })
  .add('Button - Action', () => {
    return <ActionButton label="I am an action button" onClick={action('Clicked!')} />;
  })
  .add('Button - Action - Light', () => {
    return (
      <ActionButton lightTheme label="I am a light action button" onClick={action('Clicked!')} />
    );
  })
  .add('Text Input - Empty', () => {
    return <TextInput />;
  })
  .add('Text Input - With placeholder', () => {
    return <TextInput placeholder="Cups of coffee" />;
  })
  .add('Text Input - With placeholder - Dynamic', () => {
    const [text, setText] = useState('');
    return (
      <TextInput placeholder="Cups of coffee" value={text} onChange={(value) => setText(value)} />
    );
  })
  .add('Search Input - Empty', () => {
    return <SearchInput />;
  })
  .add('Search Input - With placeholder', () => {
    return <SearchInput placeholder="Cups of coffee" />;
  })
  .add('Search Input - With placeholder - Dynamic', () => {
    const [text, setText] = useState('');
    return (
      <SearchInput placeholder="Cups of coffee" value={text} onChange={(value) => setText(value)} />
    );
  });
