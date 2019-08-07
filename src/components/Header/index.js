import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui pointing menu">
            <NavLink to="/sales" className="item">Vendas</NavLink>
            <NavLink to="/products" className="item">Produtos</NavLink>
            <NavLink to="/categories" className="item">Categorias</NavLink>
            <NavLink to="/receita" className="item">Receita</NavLink>          
        </div>
    );
}

export default Header;