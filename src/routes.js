import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Sales from './screens/Sales';
import Products from './screens/Products';
import SingleProduct from './screens/Products/SingleProduct';
import Categories from './screens/Categories';
import Receita from './screens/Recipe';
import FormCategory from './screens//Categories/form/FormCategory';
import FormProduct from './screens/Products/form/FormProduct';
import FormSale from './screens/Sales/form/FormSale';
import SeeSale from './screens/Sales/SeeSale';

class Routes extends Component {
    render() {
        return (
            <div className="ui container">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/sales" component={Sales} />
                    <Route path="/addSale" component={FormSale} />
                    <Route path="/seeProducts/:id" component={SeeSale} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/addCategory" component={FormCategory} />
                    <Route path="/products" component={Products} />
                    <Route path="/product/:id" component={SingleProduct} />
                    <Route path="/addProduct" component={FormProduct} />
                    <Route path="/acesso" component={Receita} />
                </Switch>
            </div>
        )
    }
}

export default Routes;
