import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert-react';
import { deleteProduct } from '../../functions/product';

const ProductList = ({ fields, data, history, refresh }) => {
    const [alert, setAlert] = useState(false);
    const [productId, selectProduct] = useState("");

    const verifyData = () => {
        if(data.length === 0) {
            return (
                <div style={{textAlign: 'center'}}>Não tem dados</div>
            );
        } else {
            return (
                <table className="ui celled table">
                    <thead>
                        <tr>
                        {fields && fields.map(item => (
                                <th key={item.id}>{item.name}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    <div style={{display: 'flex'}}>
                                        <div className="item">
                                            <Link className="ui button icon yellow" to={'product/'+item.id}>
                                                <i className="edit icon"></i> Editar
                                            </Link>                                    
                                        </div>
                                        <div className="item">
                                            <button className="ui button icon red" onClick={() => {
                                                setAlert(true);
                                                selectProduct(item.id);
                                            }}>
                                                <i className="trash icon"></i> Deletar
                                            </button>                                    
                                        </div>                                        
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>                 
                </table>
            );
        }
    }
    return (
        <div>
            {verifyData()}
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
                    deleteProduct(productId);
                    refresh();
                    history.push('/');
                    history.replace('/products')
                }}
                onCancel={() => setAlert(false)}
                />
            </div>
        </div>
    );
}

export default ProductList;