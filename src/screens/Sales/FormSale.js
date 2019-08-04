import React, { useState } from 'react';
import Grid from  '../../components/Layouts/Grid';
import Column from '../../components/Layouts/Column';
import ButtonIcon from '../../components/Inputs/ButtonIcon';
import {handleSell, handleBought, createSale } from '../../functions/sale';
import SelectProduct from './SelectProduct';

const FormSale = ({ history }) => {

    const [whoSell , setWhoSell] = useState("");
    const [whoBought , setWhoBought] = useState("");
    const [total , setTotal] = useState("0.00");
    const [items, setItems] = useState([]);

    const backProduct = () => {
        history.push('/sales');
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
                    <form className="ui form" onSubmit={(e) => createSale(e, whoSell, whoBought, total, items, history)}>
                        <div className="field">
                            <label>Vendedor *</label>
                            <input type="text" name="sale-sell" onChange={e => handleSell(e, setWhoSell)} value={whoSell}  placeholder="Nome de quem está vendendo" />
                        </div>
                        <div className="field">
                            <label>Comprador *</label>
                            <input type="text" name="sale-bought" onChange={e => handleBought(e, setWhoBought)} value={whoBought} placeholder="Nome de quem está comprando" />
                        </div>
                            <SelectProduct setTotal={setTotal} total={total} items={items} setItems={setItems} />                   
                        <div>                       
                        </div>
                        <div className="field" style={{marginTop: 10}}>
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