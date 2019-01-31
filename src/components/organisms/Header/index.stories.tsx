import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import Header from '.';

// Wrap Header with MemoryRouter to avoid storybook error
export const StoryHeader = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);

storiesOf('organisms/Header', module).add('default', () => <StoryHeader />);
