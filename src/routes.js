import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Categories from './components/Categories';
import Config from './components/Config';
import FormCategory from './components//Categories/FormCategory';

class Routes extends Component {
    render() {
        return (
            <div className="ui container">
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/categories" component={Categories} />
                <Route path="/addCategory" component={FormCategory} />
                <Route path="/products" component={Products} />
                <Route path="/config" component={Config} />
                </Switch>
            </div>
        )
    }
}

export default Routes;
