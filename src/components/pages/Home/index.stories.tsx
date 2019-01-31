import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { StoryHeader } from '../../organisms/Header/index.stories';
import Home from './container';
import { store } from '../../../store';

storiesOf('pages/Home', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <Home />)
  .add('with layout', () => (
    <div>
      <StoryHeader />
      <Home />
    </div>
  ));
