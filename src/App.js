import './App.css';
import {Helmet} from 'react-helmet';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListMovieComponent from './components/ListMovieComponent';
import MovieComponent from './components/MovieComponent';

function App() {
  return (
    <div className = 'App'>
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
      <Router>
          <HeaderComponent />
          <br/><br/>
          <div>
              <Switch>
                  <Route path = '/' exact component = {ListMovieComponent}></Route>
                  <Route path = '/premieres' component = {ListMovieComponent}></Route>
                  <Route path = "/:id" component = {MovieComponent}></Route>
              </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
