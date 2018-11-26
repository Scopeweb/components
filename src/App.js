import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import DesignDevelopment from './Components/DesignDevelopment/DesignDevelopment';

import './Styles/Fonts.css';
import './Styles/Normalize.min.css';
import './Styles/Pixeicons.css';
import './Styles/Animation.css';
import './Styles/Layout.css';
import './Styles/Style.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' activeClassname="uk-active" component={Home}/>
        <Route path='/about' activeClassname="uk-active" component={About}/>
        <Route path='/how-we-work' component={DesignDevelopment}/>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;