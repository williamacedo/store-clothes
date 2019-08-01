import React, { useState, useEffect } from 'react';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import ProductList from '../Table/ProductList';
import { getProducts } from '../../functions/product';
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

    const [data, setProduct] = useState([]);
    
    const listProduct = () => {
        getProducts(setProduct);
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
                        <ProductList data={data} history={history} refresh={listProduct} fields={fields} />
                    </div>
                </Column>
            </Grid>
        </div>
    );
}

export default Products;