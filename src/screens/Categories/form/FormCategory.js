import React, { useState } from 'react';
import Grid from  '../../../components/Layouts/Grid';
import Column from '../../../components/Layouts/Column';
import ButtonIcon from '../../../components/Inputs/ButtonIcon';
import Segment from '../../../components/Layouts/Segment';
import { handleName, handleDescription, createCategory } from '../../../functions/category';

const FormCategory = ({ history }) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const backCategory = () => {
        history.push('/categories');
    }

    return (
            <Segment>
                <Grid>
                    <Column col="sixteen wide column">
                        <ButtonIcon 
                            type="left floated white"
                            icon="angle left"
                            text="Voltar"
                            click={backCategory}
                        />    
                        <div className="form-category">
                            <form className="ui form" onSubmit={(e) => createCategory(e, name, description, history)}>
                                <div className="field">
                                    <label>Nome</label>
                                    <input type="text" id="name" name="name" onChange={e => handleName(e, setName)} value={name}  placeholder="Nome da categoria" />
                                </div>
                                <div className="field">
                                    <label>Description</label>
                                    <input type="text" id="description" name="description" onChange={e => handleDescription(e, setDescription)} value={description} placeholder="Descrição da categoria" />
                                </div>
                                <button className="ui button green" type="submit">Adicionar</button>
                            </form>                        
                        </div>
                    </Column>
                </Grid>            
            </Segment>
        );
}

export default FormCategory;