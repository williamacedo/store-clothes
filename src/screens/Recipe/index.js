import React, { useEffect, useState } from 'react';
import Segment from '../../components/Layouts/Segment';
import Grid from '../../components/Layouts/Grid';
import Column from '../../components/Layouts/Column';
import SaleList from '../../components/Table/SaleList';
import { getAllSales, getAcessRecipe } from '../../functions/recipe';
import SelectMonth from './month';
import LoginForm from './month/form';
import ButtonIcon from '../../components/Inputs/ButtonIcon';
import { Total, Content } from './styles.js';

const Config = ({ history }) => {

    const [sales, setSale] = useState([]);
    const [total, setTotal] = useState("");
    const [selected, setSelected] = useState("");
    const [acess, setAcess] = useState(false);

    useEffect(() => {
        getAllSales(setSale, setTotal);
        getAcessRecipe(setAcess);
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

    const logout = () => {
        localStorage.setItem('acess', '');
        setAcess(false);
    }

    const filterSale = sales.filter(item => item.month === selected);

    return (
        <Segment>
            <Grid>
                    <Column col="sixteen wide column">
                        {!acess &&
                            <LoginForm setAcess={setAcess} />
                        }      
                        {acess &&              
                            <div>
                                <Content>                        
                                    <Total>Receita Total: <span>{total}</span></Total>
                                    <ButtonIcon 
                                        type="red"
                                        icon="undo"
                                        text="Sair"
                                        click={logout}
                                    />
                                </Content>    
                                <SelectMonth callback={takeMonth} />  
                                {(filterSale.length === 0 && selected !== "") && <p>Não teve vendas nesse mês</p>}                 
                                <SaleList data={filterSale.length > 0 ? filterSale : sales} fields={fields} history={history} />                            
                            </div>
                        }
                    </Column>
            </Grid>            
        </Segment>
    );
}

export default Config;