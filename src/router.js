import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Views/Homepage/Homepage';
import Store from './Views/Store';
import Header from './Commons/Header/Header'
import Footer from './Commons/Footer';


export default function AppRoutes() {

    return (
        <Router>
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/store" component={Store} />
            <Footer />
        </Router>
    );
    
}
