import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Todos from './routes/Todos';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/todos" exact component={Todos} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
