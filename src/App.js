import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Settings from './Components/Settings';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/settings' component={Settings} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
