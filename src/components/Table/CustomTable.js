import React from 'react';

const TableSimple = ({ fields, data }) => {
    return (
        <table className="ui celled table">
            <thead>
                {fields && fields.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </thead>
            <tbody>
                {data && data.map(item => (
                    <tr key={item.key}>
                        <td>{item.title}</td>
                    </tr>
                ))}
            </tbody>
      </table>
    );
}

export default TableSimple;