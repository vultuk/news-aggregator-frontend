import { Route, Switch } from 'react-router-dom';

import Home from 'Pages/Home/Home';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
  </Switch>
);

export default Routes;
