import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import {connect} from 'react-redux';
import {
    Switch,
    Route,
  } from "react-router-dom";

import Background from './food-bg.jpg';

const App = ({total}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={total}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cart' exact component={CartPage}/>
                <Route path = '/:id' exact component ={ItemPage}/>
            </Switch>
        </div>

        
    )
}

const mapStateToProps = ({total}) => {
    return {
        total
    }
}


export default connect(mapStateToProps)(App);