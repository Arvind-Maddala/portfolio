import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Achievements, Home, Contact, Experience, Projects} from './pages';
import { AnimatePresence } from 'framer-motion';
import './App.css'

const App = () => {

  return (
    <div className="app">
      <Router>

       <AnimatePresence exitBeforeEnter>
        <Switch >
          <Route exact path="/"><Home/></Route>
          <Route path="/achievements"><Achievements/></Route>
          <Route path="/experience"><Experience/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route path="/projects"><Projects/></Route>
        </Switch>
       </AnimatePresence>
      
    </Router>
    </div>
  )
}

export default App


