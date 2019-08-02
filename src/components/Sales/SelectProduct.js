import React, { useEffect, useState } from 'react';
import { ProductContainer, Item, Content } from './styles.js';
import { getProducts, handleSearch } from '../../functions/product';

const SelectProduct = ({ setTotal, total }) => {
    const [products, setProduct] = useState([]);
    const [items, setItems] = useState([]);
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
    };

    const removeProduct = (index, price) => {
        let newCart = items.filter(item => item.id !== index);
        let cartTotal = parseFloat(total) - parseFloat(price);
        setItems(newCart);
        setTotal(cartTotal.toFixed(2));
    }

    // const filteredItems = items.filter(item => {
    //     return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    // });

    return (
        <ProductContainer>
            <div className="field">
                <label>Produtos</label>
            </div>
            <div className="ui input" style={{width: '100%'}}>
                <input type="text" placeholder="Buscar Produtos..." onChange={e => handleSearch(e, setSearch)} value={search} />
            </div>   
                <div className="ui segment product-content" style={{marginBottom: 10}}>
                    <Content>
                        {products.map(product => (
                            <Item onClick={(e) => addProduct(e, product)} key={product.id}>
                                <p>{product.title}</p>
                                <p>{product.price}</p>
                            </Item>
                        ))}
                    </Content>
                </div>            
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
        </ProductContainer>
    );
}

export default SelectProduct;