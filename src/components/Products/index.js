import React, { useState, useEffect } from 'react';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import ProductTable from '../Table/ProductTable';
import './styles.css';

const Products = ({ history }) => {

    const addProduct = () => {
        history.push('/addProduct');
    }
    
    const fields = [
        {id: 1, name: 'Nome'},
        {id: 2, name: 'Descrição'},
        {id: 3, name: 'Categoria'},
        {id: 4, name: 'Preço'},
        {id: 5, name: 'Ações'}
    ]

    const [data, setData] = useState([]);
    
    const listProduct = () => {
        fetch('http://localhost:8000/products')
            .then(response => response.json())
            .then(ProductJson => {
                setData(ProductJson);
            })    
    }
    
    useEffect(() => {
        listProduct();
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
                        <ProductTable data={data} history={history} refresh={listProduct} fields={fields} />
                    </div>
                </Column>
            </Grid>
        </div>
    );
}

export default Products;