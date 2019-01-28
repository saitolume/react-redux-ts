import React, { FC } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../containers/pages/HomeContainer';
import { Contact } from './pages/Contact';
import { Navbar } from './organisms/Navbar';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
};

const Header = styled(Navbar)`
  background-color: #222;
`;

export default App;
