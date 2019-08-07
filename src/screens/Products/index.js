import React, { useState, useEffect } from 'react';
import Segment from '../../components/Layouts/Segment';
import Grid from  '../../components/Layouts/Grid';
import Column from '../../components/Layouts/Column';
import ButtonIcon from '../../components/Inputs/ButtonIcon';
import ProductList from '../../components/Table/ProductList';
import Pagination from '../../components//Pagination';
import Search from '../../components/Search';
import { getProducts, getAllProducts } from '../../functions/product';
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

    const [products, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [filterSale, setFilterSale] = useState(false);

    const listProduct = () => {
        getProducts(setProduct, 1, () => {});
    }
    
    useEffect(() => {
        listProduct();
    }, []);

    const handleFilter = () => {
        setFilterSale(!filterSale);
        getAllProducts(setProduct);
    }
    let filterEach = products.filter(item =>  item.category.toLowerCase().search(search.toLowerCase()) !== -1);
    console.log(filterEach);
    return (
        <Segment>
            <Grid>
                {filterSale &&
                    <Column col="sixteen wide column">
                        <Search search={search} setSearch={setSearch} placeholder="Categoria" />
                    </Column>
                }            
                <Column col="sixteen wide column">
                    <div>
                        <ButtonIcon 
                            type="right floated blue"
                            icon="plus"
                            text="Adicionar Produto"
                            click={addProduct}
                        />
                        <ButtonIcon 
                        type={filterSale === true ? "left floated red" : "left floated green"}
                        icon={filterSale === true ? "undo" : "plus"}
                        text={filterSale === true ? "Fechar Filtro" : "Filtrar Categoria"}
                        click={handleFilter}
                        />                     
                    </div>
                    <div className="table-product">
                        <ProductList data={filterEach.length > 0 ? filterEach : products} history={history} refresh={listProduct} fields={fields} />
                    </div>
                </Column>
                {!filterSale &&<Pagination data={getProducts} set={setProduct} />}              
            </Grid>           
        </Segment>
    );
}

export default Products;