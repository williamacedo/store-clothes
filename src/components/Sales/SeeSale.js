import React, { useEffect, useState } from 'react';
import Segment from  '../Layouts/Segment';
import Grid from  '../Layouts/Grid';
import Column from '../Layouts/Column';
import ButtonIcon from '../Inputs/ButtonIcon';
import { getSingleSale } from '../../functions/sale';

const SeeSale = ({ history, match }) => {

    const { id } = match.params;
    const [sale, setSale] = useState([]);

    const backProduct = () => {
        history.push('/sales');
    }

    useEffect(() => {
        getSingleSale(id, setSale, (data) => {
            setSale(data);
        });
    }, [])


    console.log(sale);
    return (
        <Segment>
            <Grid>
                <div style={{marginTop: 20}}>
                    <ButtonIcon 
                        type="left floated white"
                        icon="angle left"
                        text="Voltar"
                        click={backProduct}
                    />                         
                </div>             
                <Column col="sixteen wide column">
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Descrição</th>
                                <th>Categoria</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                        {sale && sale.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Column>
            </Grid>
        </Segment>
    );
}

export default SeeSale;