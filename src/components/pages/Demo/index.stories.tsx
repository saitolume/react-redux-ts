import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { StoryHeader } from '../../organisms/Header/index.stories';
import Demo from './container';
import { store } from '../../../store';

storiesOf('pages/Demo', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <Demo />)
  .add('with layout', () => (
    <div>
      <StoryHeader />
      <Demo />
    </div>
  ));
