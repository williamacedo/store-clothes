import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert-react';
import { deleteSale } from '../../functions/sale';

const SaleList = ({ data, fields, history, refresh }) => {
    const [alert, setAlert] = useState(false);
    const [saleId, selectSale] = useState("");

    const verifySale = () => {
        if(data.length === 0) {
            return (
                <div style={{textAlign: 'center'}}>Não tem vendas</div>
            )
        } else {
            return (
                <table className="ui celled table" style={{marginTop: 10}}>
                    <thead>
                        <tr>
                            {fields && fields.map(field => (<th key={field.id}>{field.name}</th>))}                        
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(sale => (
                            <tr key={sale.id}>
                                <td>{sale.id}</td>
                                <td>{sale.whoSell}</td>
                                <td>{sale.whoBought}</td>
                                <td>{sale.totalPrice}</td>
                                {fields.length === 5 &&
                                    <td>
                                        <div style={{display: 'flex'}}>
                                            <div className="item">
                                                <Link className="ui button icon blue" to={'seeProducts/'+sale.id}>
                                                    <i className="eye icon"></i> Ver Produtos
                                                </Link>                                    
                                            </div>  
                                            <div className="item">
                                                <button onClick={() => {
                                                    setAlert(true);
                                                    selectSale(sale.id);
                                                }} className="ui button icon red">
                                                    <i className="trash icon"></i>  Deletar                                                
                                                </button>                                    
                                            </div>                                                                               
                                        </div>
                                    </td>
                                }
                            </tr>                                    
                        ))}                    
                    </tbody>
                </table>                
            )
        }
    }
    return (
        <div>
            {verifySale()}
            <div>
                <SweetAlert
                show={alert}
                showCancelButton
                showLoaderOnConfirm
                confirmButtonText="Confirmar"
                cancelButtonText="Cancelar"
                cancelButtonColor="red"
                confirmButtonColor="green"
                title="Quer excluir este produto?"
                onConfirm={() => {
                    setAlert(false);
                    deleteSale(saleId);
                    refresh();
                    history.replace('/');
                }}
                onCancel={() => setAlert(false)}
                />
            </div>            
        </div>
    );
}

export default SaleList;