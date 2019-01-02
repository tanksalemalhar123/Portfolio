import React from 'react';
import LandingPage from './LandingPage';
import {Switch,Route} from 'react-router-dom';

import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';



const Main=( )=>(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
       
        <Route path="/Contact" component={Contact}/>
        <Route path="/Resume" component={Resume}/>
        <Route path="/Projects" component={Projects}/>
    </Switch>
)


export default Main;