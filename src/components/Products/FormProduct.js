import React, { useState, useEffect } from 'react';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import './styles.css';
import { sendData } from '../../functions/product';
import CurrencyInput from 'react-currency-input';

const FormProduct = ({ history }) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categories, getCategories] = useState([]);
    const [selectCategory, setChange] = useState("");
    const [price, setPrice] = useState("");
    
    const backProduct = () => {
        history.push('/products');
    }

    const fetchCategories = () => {
        fetch('http://localhost:8000/categories')
            .then(response => response.json())
            .then(responseJson => {
                getCategories(responseJson);
            })    
    }
    
    useEffect(() => {
        fetchCategories()
    }, []);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleCategory = (e) => {
        setChange(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
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
                            <form className="ui form" onSubmit={(e) => sendData(e, name, description, selectCategory, price, history)}>
                                <div className="field">
                                    <label>Nome</label>
                                    <input required type="text" name="name" onChange={handleName} value={name}  placeholder="Nome do Produto" />
                                </div>
                                <div className="field">
                                    <label>Description</label>
                                    <input required type="text" name="description" onChange={handleDescription} value={description} placeholder="Descrição do Produto" />
                                </div>
                                <div className="field">
                                    <label>Categoria</label>
                                    <select className="ui dropdown" value={selectCategory} onChange={handleCategory}>
                                            <option value="">Selecione uma categoria</option>
                                        {categories && categories.map(item => (
                                            <option key={item.id} value={item.title}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Preço</label>
                                    <CurrencyInput required type="text" name="price" onChangeEvent={handlePrice} value={price} /> 
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