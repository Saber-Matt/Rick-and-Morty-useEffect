import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import DetailPage from '../../containers/DetailPage';
import RickAndMortyCast from '../../containers/RickAndMortyCast';

export default function App() {
  return (
    <div>
      <Router>
        <main>
          <Switch>

            <Route path="/" exact={true}
              component={RickAndMortyCharacters} 
            />

            <Route path="/:id" exact={true}
              component={DetailPage} 
            />

            <Redirect to="/" />
            
          </Switch>
        </main>
      </Router>
    </div>
  );
}
