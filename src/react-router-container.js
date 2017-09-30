import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import SignUp from './components/SimpleForm/SignUp/SignUp.js';
import Rides from './components/Rides/Rides.js';

const Routes = () => {
    return (
        <div>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route exact path="/SIGNUP" component={SignUp} />   
            <Route exact path="/RIDES" component={Rides} />           
        </div>
    );
}


export default Routes;