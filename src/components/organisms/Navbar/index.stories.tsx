import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import Navbar from '.';

// Wrap Navbar with MemoryRouter to avoid storybook error
export const StoryNavbar = () => (
  <MemoryRouter>
    <Navbar />
  </MemoryRouter>
);

storiesOf('organisms/Navbar', module).add('default', () => <StoryNavbar />);
