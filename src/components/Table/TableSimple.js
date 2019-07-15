import React from 'react';

const TableSimple = ({ fields, data }) => {
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
                    </tr>
                ))}
            </tbody>
      </table>
    );
}

export default TableSimple;