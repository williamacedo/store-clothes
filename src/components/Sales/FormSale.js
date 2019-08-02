import React, { useState } from 'react';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import { sendSale } from '../../functions/sale';
import {handleSell, handleBought } from '../../functions/sale';
import SelectProduct from './SelectProduct';

const FormSale = ({ history }) => {

    const [whoSell , setWhoSell] = useState("");
    const [whoBought , setWhoBought] = useState("");
    const [total , setTotal] = useState("0.00");

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
                            <SelectProduct setTotal={setTotal} total={total} />                   
                        <div>                       
                        </div>
                        <div className="field">
                            <label>Total</label>
                            <input required type="text" name="sale-price" disabled value={total} /> 
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