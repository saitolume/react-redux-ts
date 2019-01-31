import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Contact, Home } from './pages';
import { Header } from './organisms';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
