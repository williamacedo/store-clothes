import React, { useState } from 'react';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import './styles.css';

const FormCategory = ({ history }) => {

    const [name, setName] = useState("");

    const [description, setDescription] = useState("");

    const backCategory = () => {
        history.push('/categories');
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const sendData = (e, name, description) => {
        e.preventDefault();

        let data = { 
             "title": name,
             "description": description
        }
        fetch('http://localhost:8000/categories/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },            
            body: JSON.stringify(data)
        })
        .then(data => {
            history.push('/categories');
        })
        .catch(error => console.error(error));        
    }

    console.log(name+description)
    return (
            <div className="ui segment">
                <Grid>
                    <Column col="sixteen wide column">
                        <ButtonIcon 
                            type="left floated white"
                            icon="angle left"
                            text="Voltar"
                            click={backCategory}
                        />    
                        <div className="form-category">
                            <form className="ui form" onSubmit={(e) => sendData(e, name, description)}>
                                <div className="field">
                                    <label>Nome</label>
                                    <input type="text" name="name" onChange={handleName} value={name}  placeholder="Nome da categoria" />
                                </div>
                                <div className="field">
                                    <label>Description</label>
                                    <input type="text" name="categoria" onChange={handleDescription} value={description} placeholder="Descrição da categoria" />
                                </div>
                                <button className="ui button green" type="submit">Adicionar</button>
                            </form>                        
                        </div>
                    </Column>
                </Grid>            
            </div>
        );
}

export default FormCategory;