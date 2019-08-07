import React, { useState, useEffect } from 'react';
import { handleMonth } from '../../../functions/recipe';
import { months } from '../../../mocks';

const SelectMonth = ({ callback }) => {
    const [month, setMonth] = useState("");

    useEffect(() => {
        if(month !== "") {
            callback(month);         
        }
    }, [month])

    const changeMonth = (e) => {
        handleMonth(e, setMonth);
        
    } 

    return (
        <form className="ui form">
            <div className="field">
                <label>Filtrar por mês</label>
                <select className="ui dropdown" value={month} onChange={e => changeMonth(e)}>
                        <option value="00">Selecione um mês</option>
                        {months.map(item => (<option key={item.id} value={item.number}>{item.name}</option>))}                    
                </select>        
            </div>        
        </form>
    )
}

export default SelectMonth;