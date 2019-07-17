import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui pointing menu">
            <NavLink to="/sales" className="item">Vendas</NavLink>
            <NavLink to="/products" className="item">Produtos</NavLink>
            <NavLink to="/categories" className="item">Categorias</NavLink>
            <NavLink to="/config" className="item">Configurações</NavLink>
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="Search..." />
                        <i className="search link icon"></i>
                    </div>
                </div>
          </div>            
        </div>
    );
}

export default Header;