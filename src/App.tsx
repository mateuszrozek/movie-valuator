import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Navbar} from "./app/Navbar";
import {ValuationConfig} from "./feature/ValuationConfig";
import {ValuationForm} from './feature/ValuationForm';

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
                            <React.Fragment>
                                <ValuationForm/>
                            </React.Fragment>
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
