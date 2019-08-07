import React, { useState, useEffect } from 'react';
import { getSales } from '../../functions/sale';
import SaleList from '../../components/Table/SaleList';
import ButtonIcon from '../../components/Inputs/ButtonIcon';
import Segment from '../../components/Layouts/Segment';
import Grid from '../../components/Layouts/Grid';
import Column from '../../components/Layouts/Column';
import Pagination from '../../components/Pagination';

const Sales = ({ history }) => {
    const [sales, setSale] = useState([]);

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

    return (
        <Segment>
            <Grid>
                <Column col="sixteen wide column">
                    <div style={{marginBottom: 50}}>
                        <ButtonIcon 
                            type="right floated blue"
                            icon="plus"
                            text="Adicionar Venda"
                            click={addSale}
                        />                    
                    </div>
                    <SaleList data={sales} fields={fields} refresh={fetchSales} history={history} />
                </Column>
            <Pagination data={getSales} set={setSale} /> 
            </Grid>
        </Segment>
    )
}

export default Sales;