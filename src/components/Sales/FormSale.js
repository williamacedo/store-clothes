import React, { useState, useEffect } from 'react';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import { sendSale } from '../../functions/sale';
import { getProducts } from '../../functions/product';
import {handleSell, handleBought, handleTotal } from '../../functions/sale';
import { ProductContainer, Item } from './styles.js'

const FormSale = ({ history }) => {

    const [products, setProduct] = useState([]);
    const [whoSell , setWhoSell] = useState("");
    const [whoBought , setWhoBought] = useState("");
    const [total , setTotal] = useState("0.00");

    useEffect(() => {
        getProducts(setProduct);
    }, []);

    const addProduct = (e, obj) => {
        e.preventDefault();
    }

    const backProduct = () => {
        history.push('/products');
    }
    
    return (
        <div className="ui segment">
        <Grid>
            <div style={{marginTop: 20}}>
                <ButtonIcon 
                    type="left floated white"
                    icon="angle left"
                    text="Voltar"
                    click={backProduct}
                />                         
            </div>                
            <Column col="sixteen wide column">
                <div className="form-product">
                    <form className="ui form" onSubmit={(e) => sendSale(e, whoSell, whoBought, total, history)}>
                        <div className="field">
                            <label>Vendedor *</label>
                            <input type="text" name="sale-sell" onChange={e => handleSell(e, setWhoSell)} value={whoSell}  placeholder="Nome de quem está vendendo" />
                        </div>
                        <div className="field">
                            <label>Comprador *</label>
                            <input type="text" name="sale-bought" onChange={e => handleBought(e, setWhoBought)} value={whoBought} placeholder="Nome de quem está comprando" />
                        </div>
                        {products.length !== 0 &&
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
                                                 
                        </ProductContainer>
                        }
                        <div>                       
                        </div>
                        <div className="field">
                            <label>Total</label>
                            <input required type="text" name="sale-price" disabled onChange={e => handleTotal(e, setTotal)} value={total} /> 
                        </div>                                
                        <button className="ui button green" type="submit">Adicionar</button>
                    </form>                        
                </div>
            </Column>
        </Grid>            
    </div>
    )
}

export default FormSale;