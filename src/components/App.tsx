import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Demo } from './pages';
import { Header } from './organisms';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/demo" exact component={Demo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
