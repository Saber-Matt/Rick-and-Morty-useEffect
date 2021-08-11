import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Detail from '../../containers/Detail.jsx';
import RickAndMortyCast from '../../containers/Detail.jsx';

export default function App() {
  return (
    <div>
      <Router>
        <main>
          <Switch>

            <Route path="/" exact={true}
              component={RickAndMortyCast} 
            />

            <Route path="/:id" exact={true}
              component={Detail} 
            />

            <Redirect to="/" />
            
          </Switch>
        </main>
      </Router>
    </div>
  );
}
