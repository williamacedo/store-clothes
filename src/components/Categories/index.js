import React, { useState, useEffect } from 'react';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import TableSimple from '../Table/TableSimple';
import './styles.css';

const Categories = ({ history }) => {

    const addCategory = () => {
        history.push('/addCategory');
    }
    
    const fields = [
        {id: 1, name: 'Nome'},
        {id: 2, name: 'Descrição'}
    ]

    const [data, setData] = useState([]);
    
    function fetchData() {
        fetch('http://localhost:8000/categories')
            .then(response => response.json())
            .then(responseJson => {
                setData(responseJson);
                localStorage.setItem('categories', responseJson.length);
            })    
    }
    
    useEffect(() => {
        fetchData()
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
                        <TableSimple data={data} fields={fields} />
                    </div>
                </Column>
            </Grid>
        </div>
    );
}

export default Categories;