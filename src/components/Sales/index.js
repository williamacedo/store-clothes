import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getSales } from '../../functions/sale';
import SaleList from '../Table/SaleList';
import ButtonIcon from '../Inputs/ButtonIcon';

const Sales = ({ history }) => {
    const [sales, setSale] = useState([]);

    useEffect(() => {
        getSales(setSale);
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

    const Header = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    return (
        <div className="ui segment">
            <div>
                <Header>
                    <div>Total: {sales.length}</div>
                    <ButtonIcon 
                        type="right floated blue"
                        icon="plus"
                        text="Adicionar Venda"
                        click={addSale}
                    />
                </Header>
                <SaleList data={sales} fields={fields} />
            </div>
        </div>
    )
}

export default Sales;