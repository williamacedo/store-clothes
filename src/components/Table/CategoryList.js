import React, { useState } from 'react';
import SweetAlert from 'sweetalert-react';
import { deleteCategory } from '../../functions/category';

const CategoryList = ({ fields, data, history, refresh }) => {

    const [alert, setAlert] = useState(false);
    const [categoryId, setId] = useState("");

    return (
        <div>
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
                        <tr className="item" key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td><button className="ui button icon red" onClick={() => {
                                setId(item.id);
                                setAlert(true);
                            }}><i className="trash icon"></i> Deletar</button></td>
                        </tr>
                    ))}
                </tbody>
        </table>
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
                deleteCategory(categoryId);
                refresh();
                history.push('/');
                history.replace('/categories')
            }}
            onCancel={() => setAlert(false)}
        />
        </div>   
    </div>   
    );
}

export default CategoryList;