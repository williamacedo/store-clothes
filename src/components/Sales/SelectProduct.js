import React, { useEffect, useState } from 'react';
import { ProductContainer, Item } from './styles.js';
import { getProducts } from '../../functions/product';

const SelectProduct = () => {
    const [products, setProduct] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts(setProduct);
    }, []);
    
    const addProduct = (e, obj) => {
        let cart = [];
        cart.push(obj);
        let select = items.concat(cart);
        setItems(select);
    };

    const removeProduct = (index) => {
        let newCart = items.slice(0, index);
        setItems(newCart);
    }

    return (
        <ProductContainer>
            <div className="field">
                <label>Produtos</label>
            </div>
            <div className="ui input" style={{width: '100%'}}>
                <input type="text" placeholder="Buscar Produtos..." />
            </div>   
            <div className="ui segment" style={{marginBottom: 10}}>
                {products.map(product => (
                    <Item onClick={(e) => addProduct(e, product)} key={product.id}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </Item>
                ))}
            </div>
            <div className="field">
                <label>Carrinho</label>
            </div>            
            <div className="ui segment" style={{marginBottom: 10}}>
                {items && items.map((item, index) => (
                    <Item onClick={() => removeProduct(index)} key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </Item>
                ))}
            </div>        
        </ProductContainer>
    );
}

export default SelectProduct;