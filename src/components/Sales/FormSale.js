import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import { sendSale } from '../../functions/sale';
import { getAllProducts } from '../../functions/product';

const data = [];

const FormSale = ({ history }) => {

    const [products, getProduct] = useState([]);
    const [selected, setProduct] = useState([]);
    const [whoSell , setWhoSell] = useState("");
    const [whoBought , setWhoBought] = useState("");
    const [total , setTotal] = useState("0.00");

    useEffect(() => {
        getAllProducts((data) => {
            getProduct(data);
        });
    }, []);

    const ProductContainer = styled.div`
        
    `;

    const Item = styled.a`
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #CCC;
        padding: 5px;
        margin-top: 5px;
        cursor: pointer;
    `;

    const addProduct = (e, obj) => {
        e.preventDefault();
    }

    const removeProduct = () => {

    }

    const backProduct = () => {
        history.push('/products');
    }

    const handleSell = (e) => {
        setWhoSell(e.target.value);
    }

    const handleBought = (e) => {
        setWhoBought(e.target.value);
    }

    const handleTotal = (e) => {
        setTotal(e.target.value);
    }
    console.log(data);
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
                            <input type="text" name="sale-sell" onChange={handleSell} value={whoSell}  placeholder="Nome de quem está vendendo" />
                        </div>
                        <div className="field">
                            <label>Comprador *</label>
                            <input type="text" name="sale-bought" onChange={handleBought} value={whoBought} placeholder="Nome de quem está comprando" />
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
                            <input required type="text" name="sale-price" disabled onChange={handleTotal} value={total} /> 
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