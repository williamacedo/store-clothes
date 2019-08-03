import React, { useState, useEffect } from 'react';
import Segment from '../Layouts/Segment';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import ProductList from '../Table/ProductList';
import Pagination from '../Pagination';
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

    const [product, setProduct] = useState([]);

    const listProduct = () => {
        getProducts(setProduct, 1, () => {});
    }
    
    useEffect(() => {
        listProduct();
    }, []);

    return (
        <Segment>
            <Grid>
                <Column col="sixteen wide column">
                    <ButtonIcon 
                        type="right floated blue"
                        icon="plus"
                        text="Adicionar Produto"
                        click={addProduct}
                    />
                    <div className="table-product">
                        <ProductList data={product} history={history} refresh={listProduct} fields={fields} />
                    </div>
                </Column>
                <Pagination data={getProducts} set={setProduct} />                
            </Grid>           
        </Segment>
    );
}

export default Products;