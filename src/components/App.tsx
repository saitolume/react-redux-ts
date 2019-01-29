import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Contact, Home } from './pages';
import { Navbar } from './organisms';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
};

export default App;
