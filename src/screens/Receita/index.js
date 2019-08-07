import React, { useEffect, useState } from 'react';
import Segment from '../../components/Layouts/Segment';
import Grid from '../../components/Layouts/Grid';
import Column from '../../components/Layouts/Column';
import SaleList from '../../components/Table/SaleList';
import { getAllSales } from '../../functions/receita';
import SelectMonth from './month';
//import LoginForm from './month/form';
import styled from 'styled-components';

const Total = styled.p`
    font-size: 20px;
    font-weight: bold;
    span {
        font-size: 18px;
        font-weight: 200;
    }
`;

const d = new Date();

const Config = ({ history }) => {

    const [sales, setSale] = useState([]);
    const [total, setTotal] = useState("");
    const [selected, setSelected] = useState("");
    //const [acess, setAcess] = useState(false);

    useEffect(() => {
        getAllSales(setSale, setTotal);
    }, []);

    const fields = [
        {id: 1, name: 'Numero'},
        {id: 2, name: 'Vendedor'},
        {id: 3, name: 'Comprador'},
        {id: 4, name: 'Total'},
    ];

    const takeMonth = (month) => {
        setSelected(month);
    }

    const filterSale = sales.filter(item => item.month === selected);

    return (
        <Segment>
            <Grid>
                <Column col="sixteen wide column">
                    <div>
                        <Total>Receita Total: <span>{total}</span></Total>
                    </div>      
                    <SelectMonth callback={takeMonth} />  
                    {(filterSale.length === 0 && selected !== "") && <p>Não teve vendas nesse mês</p>}                 
                    <SaleList data={filterSale.length > 0 ? filterSale : sales} fields={fields} history={history} />
                </Column>
            </Grid>            
        </Segment>
    );
}

export default Config;