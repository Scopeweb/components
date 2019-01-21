import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import DesignDevelopment from './Components/DesignDevelopment/DesignDevelopment';
import Work from './Components/Work/Work';
import BayronHomeImprovements from './Components/Work/BayronHomeImprovements/BayronHomeImprovements';
import GoRemote from './Components/Work/GoRemote/GoRemote';
import GeminiGasSprings from './Components/Work/GeminiGasSprings/GeminiGasSprings';
import GivEasy from './Components/Work/GivEasy/GivEasy';
import NoMatch from './Components/Global/NoMatch/NoMatch';

import './Styles/Fonts.css';
import './Styles/Normalize.min.css';
import './Styles/Pixeicons.css';
import './Styles/Animation.css';
import './Styles/Layout.css';
import './Styles/Style.css';

const App = ({ match }) => (
  <div className="App">
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/our-process' component={DesignDevelopment} />
            <Route exact path='/work' component={Work} />
            <Route path='/work/bayron-home-improvements' component={BayronHomeImprovements} />
            <Route path='/work/goremote' component={GoRemote} />
            <Route path='/work/gemini-gas-springs' component={GeminiGasSprings} />
            <Route path='/work/giveasy' component={GivEasy} />
            <Route component={NoMatch} />
        </Switch>
    </Router>
  </div>
);

export default App;
