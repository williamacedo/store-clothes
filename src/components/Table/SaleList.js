import React from 'react';
import { Link } from 'react-router-dom';

const SaleList = ({ data, fields }) => {
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
                                <td>
                                    <div style={{display: 'flex'}}>
                                        <div className="item">
                                            <Link className="ui button icon blue" to={'seeProducts/'+sale.id}>
                                                <i className="eye icon"></i> Ver Produtos
                                            </Link>                                    
                                        </div>  
                                        <div className="item">
                                            <Link className="ui button icon yellow" to={'sales/'+sale.id}>
                                                <i className="edit icon"></i>
                                            </Link>                                    
                                        </div>
                                        <div className="item">
                                            <button className="ui button icon red">
                                                <i className="trash icon"></i>
                                            </button>                                    
                                        </div>                                                                               
                                    </div>
                                </td>
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
        </div>
    );
}

export default SaleList;