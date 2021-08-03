import React, { FC } from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from './screens/Home';
import { Recharts } from './screens/Recharts';
import { Victory } from './screens/Victory';
import { Nivo } from './screens/Nivo';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recharts" component={Recharts} />
        <Route path="/victory" component={Victory} />
        <Route path="/nivo" component={Nivo} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
