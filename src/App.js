import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import Pages
import Home from './pages/Home';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
import About from './pages/About';

//Import Navbar
import Navbar from './components/Navbar';

export default function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route exact path='/about'>
                    <About></About>
                </Route>
                <Route path='/cocktail/:id'>
                    <SingleCocktail></SingleCocktail>
                </Route>
                <Route path='*'>
                    <Error></Error>
                </Route>
            </Switch>
        </Router>
    );
}
