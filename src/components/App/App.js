import React from 'react';
import Home from '../Home/HomeContainer';
import MainLayout from '../MainLayout/MainLayout';
import Info from '../Info/Info';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FAQ from '../FAQ/FAQ';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={FAQ} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
