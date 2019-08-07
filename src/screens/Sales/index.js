import React, { useState, useEffect } from 'react';
import { getSales, getAllSales } from '../../functions/sale';
import SaleList from '../../components/Table/SaleList';
import ButtonIcon from '../../components/Inputs/ButtonIcon';
import Segment from '../../components/Layouts/Segment';
import Grid from '../../components/Layouts/Grid';
import Column from '../../components/Layouts/Column';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';

const Sales = ({ history }) => {
    const [sales, setSale] = useState([]);
    const [search, setSearch] = useState("");
    const [filterSale, setFilterSale] = useState(false);

    const fetchSales = () => {
        getSales(setSale, 1, () => {});
    }

    useEffect(() => {
        fetchSales();
    }, [])

    const fields = [
        {id: 1, name: 'Numero'},
        {id: 2, name: 'Vendedor'},
        {id: 3, name: 'Comprador'},
        {id: 4, name: 'Total'},
        {id: 5, name: 'Ações'}

    ];

    const addSale = () => {
        history.push('addSale');
    }

    const handleFilter = () => {
        setFilterSale(!filterSale);
        getAllSales(setSale);
    }

    let filterEach = sales.filter(item =>  item.whoBought.toLowerCase().search(search.toLowerCase()) !== -1);
    return (
        <Segment>
            <Grid>                
                {filterSale &&
                    <Column col="sixteen wide column">
                        <Search search={search} setSearch={setSearch} placeholder="Comprador" />
                    </Column>
                }
                <Column col="sixteen wide column">
                    <div style={{marginBottom: 50}}>
                        <ButtonIcon 
                            type="right floated blue"
                            icon="plus"
                            text="Adicionar Venda"
                            click={addSale}
                        /> 
                        <ButtonIcon 
                            type={filterSale === true ? "left floated red" : "left floated green"}
                            icon={filterSale === true ? "undo" : "plus"}
                            text={filterSale === true ? "Fechar Filtro" : "Filtrar Comprador"}
                            click={handleFilter}
                        />                                             
                    </div>                                    
                    <SaleList data={filterEach.length > 0 ? filterEach : sales} fields={fields} refresh={fetchSales} history={history} />
                </Column>
                {!filterSale && <Pagination data={getSales} set={setSale} />}
            </Grid>
        </Segment>
    )
}

export default Sales;