import React from 'react';

const ProductTable = ({ fields, data }) => {

    const editProduct = () => {

    }

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
                                            <button className="ui button icon yellow" onClick={editProduct}>
                                                <i class="edit icon"></i> Editar
                                            </button>                                    
                                        </div>
                                        <div className="item">
                                            <button className="ui button icon red" onClick={editProduct}>
                                                <i class="trash icon"></i> Deletar
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
        </div>
    );
}

export default ProductTable;