import './App.css';
import {Helmet} from 'react-helmet';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListMovieComponent from './components/movie/ListMovieComponent';
import MovieComponent from './components/movie/MovieComponent';
import SearchMovieComponent from './components/movie/SearchMovieComponent';

import RegistrationComponent from './components/auth/RegistrationComponent';
import LoginComponent from './components/auth/LoginComponent';
import ProfileComponent from './components/ProfileComponent';

function App() {
  return (
    <div className = 'App'>
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
      <Router>
          <HeaderComponent />
          <br/><br/><br/>
          <div>
              <Switch>
                  <Route exact path = '/'  component = {ListMovieComponent}></Route>
                  <Route exact path = '/films/premieres' component = {ListMovieComponent}></Route>
                  <Route exact path = "/films/search"  component = {SearchMovieComponent}></Route>
                  <Route exact path = "/films/:id" component = {MovieComponent}></Route>
                  <Route exact path = "/auth/reg" component = {RegistrationComponent}></Route>
                  <Route exact path = "/auth/login" component = {LoginComponent}></Route>
                  <Route exact path = "/profile" component = {ProfileComponent}></Route>
              </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
