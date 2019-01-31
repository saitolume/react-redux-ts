import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryHeader } from '../../organisms/Header/index.stories';
import Contact from '.';

storiesOf('pages/Contact', module)
  .add('default', () => <Contact />)
  .add('with layout', () => (
    <div>
      <StoryHeader />
      <Contact />
    </div>
  ));
