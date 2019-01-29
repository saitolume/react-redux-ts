import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './index';

storiesOf('atoms/Button', module)
  .add('default', () => {
    return <Button>default</Button>;
  })
  .add('color', () => {
    return <Button color="red">red</Button>;
  })
  .add('onClick', () => {
    return <Button onClick={() => alert('alert!')}>click</Button>;
  });
