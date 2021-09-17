import React from 'react';
import loadable from '@loadable/component';

import { Switch, Route, Redirect } from 'react-router-dom';

// import Home from '@pages/Home/home'
const Home = loadable(() => import('@layouts/Home'));
const About = loadable(() => import('@pages/About'));
const Film = loadable(() => import('@pages/Film'));

const App = () => {
  return (
    <Switch>
      {/* <Redirect exact path = '/' to = '/home'/> */}
      <Route path="/" component={Home} />
      {/* <Route path="/about" component={About} />
      <Route path="/film" component={Film} /> */}
    </Switch>
  );
};

export default App;
