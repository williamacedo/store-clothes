import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Sales from './components/Sales';
import Products from './components/Products';
import Categories from './components/Categories';
import Config from './components/Config';
import FormCategory from './components//Categories/FormCategory';
import FormProduct from './components/Products/FormProduct';

class Routes extends Component {
    render() {
        return (
            <div className="ui container">
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/sales" component={Sales} />
                <Route path="/categories" component={Categories} />
                <Route path="/addCategory" component={FormCategory} />
                <Route path="/products" component={Products} />
                <Route path="/addProduct" component={FormProduct} />
                <Route path="/config" component={Config} />
                </Switch>
            </div>
        )
    }
}

export default Routes;
