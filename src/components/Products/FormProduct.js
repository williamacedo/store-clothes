import React, { useState, useEffect } from 'react';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import './styles.css';
import { handleName, handleDescription, handleCategory, handlePrice, createProduct } from '../../functions/product';
import { getCategories } from '../../functions/category';
import CurrencyInput from 'react-currency-input';

const FormProduct = ({ history }) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectCategory, setChange] = useState("");
    const [price, setPrice] = useState("");
    
    const backProduct = () => {
        history.push('/products');
    }

    const fetchCategories = () => {
        getCategories(setCategories);   
    }
    
    useEffect(() => {
        fetchCategories();
    }, []);

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
                            <form className="ui form" onSubmit={(e) => createProduct(e, name, description, selectCategory, price, history)}>
                                <div className="field">
                                    <label>Nome *</label>
                                    <input required type="text" name="name" onChange={e => handleName(e, setName)} value={name}  placeholder="Nome do Produto" />
                                </div>
                                <div className="field">
                                    <label>Description</label>
                                    <input type="text" name="description" onChange={e => handleDescription(e, setDescription)} value={description} placeholder="Descrição do Produto" />
                                </div>
                                <div className="field">
                                    <label>Categoria *</label>
                                    <select className="ui dropdown" value={selectCategory} onChange={e => handleCategory(e, setChange)}>
                                            <option value="">Selecione uma categoria</option>
                                        {categories && categories.map(item => (
                                            <option key={item.id} value={item.title}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Preço *</label>
                                    <CurrencyInput required type="text" name="price" onChangeEvent={e => handlePrice(e, setPrice)} value={price} /> 
                                </div>                                
                                <button className="ui button green" type="submit">Adicionar</button>
                            </form>                        
                        </div>
                    </Column>
                </Grid>            
            </div>
        );
}

export default FormProduct;