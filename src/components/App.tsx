import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Home, Demo } from './pages';
import { Navbar } from './organisms';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header color="#FFF" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/demo" component={Demo} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};
export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: 100vw;
  background-color: #222;
`;

const Header = styled(Navbar)`
  margin: 4vh 0 2vh 0;
  z-index: 1;
`;
