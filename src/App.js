import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch } from 'react-router-dom';
import About from './pages/Abous us/Abou_us';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Courses from './pages/Courses/Course';
import Navbar from './components/Navbar/Navbar';


const App = ()=>{

    return(
      <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/courses" exact>
          <Courses/>
        </Route>
        <Route path="/team" exact>
          <Team/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;


