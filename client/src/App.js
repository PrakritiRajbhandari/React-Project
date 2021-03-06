import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store.js';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/pages/Landing/Landing";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Other from "./components/pages/Other/Other";
import Profile from "./components/Profile/profile";
import Cart from './components/Cart/Cart';
import "./App.css";

import StartUp from './components/pages/StartUp/startUp';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container-fluid pl-0 pr-0 m-0">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <div className='container-fluid m-0 p-0'>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/other" component={Other} />
                            <Route exact path="/startUp" component={StartUp} />
                            <Route path="/cart" component={Cart} />
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;
