import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LocationComponent from './LocationComponent';
import LocationMap from './LocationMap';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Applicazione di Posizione Corrente</h1>
        <Switch>
          <Route exact path="/" component={LocationComponent} />
          <Route exact path="/map" component={LocationMap} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;