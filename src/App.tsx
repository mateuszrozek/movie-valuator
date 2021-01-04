import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Navbar} from "./app/Navbar";
import {ValuationConfig} from "./feature/config/ValuationConfig";
import {ValuationOptions} from './feature/form/ValuationOptions';

function App() {
    return (
        <Router>
            <Navbar/>
            <div className='App'>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => (
                            <ValuationOptions/>
                        )}
                    />
                    <Route exact path='/config' component={ValuationConfig}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
