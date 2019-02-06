import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryNavbar } from '../../organisms/Navbar/index.stories';
import Contact from '.';

storiesOf('pages/Home', module)
  .add('default', () => <Contact />)
  .add('with layout', () => (
    <div>
      <StoryNavbar />
      <Contact />
    </div>
  ));
