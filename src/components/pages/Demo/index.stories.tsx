import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { StoryNavbar } from '../../organisms/Navbar/index.stories';
import Demo from './container';
import { store } from '../../../store';

storiesOf('pages/Demo', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <Demo />)
  .add('with layout', () => (
    <div>
      <StoryNavbar />
      <Demo />
    </div>
  ));
