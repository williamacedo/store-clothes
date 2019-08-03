import React, { useState, useEffect } from 'react';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import CategoryList from '../Table/CategoryList';
import { getCategories } from '../../functions/category';
import Pagination from '../Pagination';
import './styles.css';

const Categories = ({ history }) => {

    const addCategory = () => {
        history.push('/addCategory');
    }
    
    const fields = [
        {id: 1, name: 'Nome'},
        {id: 2, name: 'Descrição'},
        {id: 3, name: 'Ações'}
    ]

    const [categories, setCategory] = useState([]);

    const fetchCategories = () => {
        getCategories(setCategory, 1, () => {});
    }
    
    useEffect(() => {
        fetchCategories();
    }, []);


    return (
        <div className="ui segment">
            <Grid>
                <Column col="sixteen wide column">
                    <ButtonIcon 
                        type="right floated blue"
                        icon="plus"
                        text="Adicionar Categoria"
                        click={addCategory}
                    />
                    <div className="table-category">
                        <CategoryList data={categories} fields={fields} refresh={fetchCategories} history={history} />
                    </div>
                </Column>
                <Pagination data={getCategories} set={setCategory} /> 
            </Grid>
        </div>
    );
}

export default Categories;