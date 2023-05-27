import React from 'react';
import { BrowserRouter as Router, Link, Route,  } from 'react-router-dom';
import {Navigate} from 'react-router'
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './components/HomePage';
import FavoritesPage from './components/FavoritesPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
         <Navigate> 
          <Route exact path="/" component={HomePage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Navigate> 
      </Router>
    </Provider>
  );
};

export default App;
