import React, { useEffect, useState } from 'react';
import { ProductContainer, Item, ItemSearch } from './styles.js';
import { getProducts, handleSearch } from '../../functions/product';

const SelectProduct = ({ setTotal, total, items, setItems }) => {
    const [products, setProduct] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getProducts(setProduct, 1, () => {});
    }, []);
    
    const addProduct = (e, obj) => {
        let cart = [];
        let cartTotal = parseFloat(total) + parseFloat(obj.price);
        cart.push(obj);
        let select = items.concat(cart);
        setItems(select);
        setTotal(cartTotal.toFixed(2));
        setSearch('');
    };

    const removeProduct = (index, price) => {
        let newCart = items.filter(item => item.id !== index);
        let cartTotal = parseFloat(total) - parseFloat(price);
        setItems(newCart);
        setTotal(cartTotal.toFixed(2));
    }

    const filteredItems = products.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase());
    })	

    return (
        <ProductContainer>
            <div className="field">
                <label>Produtos</label>
            </div>
            <div className="ui input" style={{width: '100%'}}>
                <input type="text" placeholder="Buscar Produtos..." onChange={e => handleSearch(e, setSearch)} value={search} />
            </div>   
            <div className={search !== '' ? "results transition visible" : "results transition hidden"}>
                <div className="ui segment">
                {filteredItems && filteredItems.map(product => {
                    return (
                        <ItemSearch key={product.id} onClick={(e) => addProduct(e, product)}>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                        </ItemSearch>
                    );
                })}   
                </div>         
            </div>           
            <div style={{display: items.length !== 0 ? 'block' : 'none', marginTop: 10}}>
                <div className="field">
                    <label>Carrinho</label>
                </div>            
                <div className="ui segment" style={{marginBottom: 10}}>
                    {items && items.map((item, index) => (
                        <Item onClick={() => removeProduct(item.id, item.price)} key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </Item>
                    ))}
                </div>             
            </div>       
        </ProductContainer>
    );
}

export default SelectProduct;