import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import Navbar from '.';

// Use MemoryRouter to avoid react-router error
storiesOf('organisms/Navbar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/', 'get']}>{story()}</MemoryRouter>
  ))
  .add('default', () => <Navbar />)
  .add('color', () => <Navbar color="grey" />);
