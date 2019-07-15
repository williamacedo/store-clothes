import React, { useState, useEffect } from 'react';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import CustomTable from '../Table/CustomTable';
import './styles.css';

const Products = () => {

    const addProduct = () => {
        alert('ok');
    }
    
    const fields = [
        {id: 1, name: 'Nome'}
    ]

    const [data, setData] = useState([]);
    
    function fetchData() {
        fetch('http://localhost:8000/products')
            .then(response => response.json())
            .then(responseJson => {
                setData(responseJson);
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
                        text="Adicionar Produto"
                        click={addProduct}
                    />
                    <div className="table-product">
                        <CustomTable data={data} fields={fields} />
                    </div>
                </Column>
            </Grid>
        </div>
    );
}

export default Products;