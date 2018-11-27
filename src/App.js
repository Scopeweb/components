import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import DesignDevelopment from './Components/DesignDevelopment/DesignDevelopment';
import NoMatch from './Components/Global/NoMatch/NoMatch';

import './Styles/Fonts.css';
import './Styles/Normalize.min.css';
import './Styles/Pixeicons.css';
import './Styles/Animation.css';
import './Styles/Layout.css';
import './Styles/Style.css';

export const initGA= () => {
  console.log('GAinit')
  ReactGA.initialize('UA-129909734-1')
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname})
  ReactGA.pageview(window.location.pathname)
}

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' activeClassname="uk-active" component={Home}/>
        <Route exact path='/about' activeClassname="uk-active" component={About}/>
        <Route exact path='/how-we-work' component={DesignDevelopment}/>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </div>
);

export default App;