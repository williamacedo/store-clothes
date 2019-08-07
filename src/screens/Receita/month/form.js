import React, { useState, useEffect } from 'react';
import { getAcess } from '../../../functions/receita';

const LoginForm = ({ access, setAcess }) => {
    useEffect(() => {
        if(localStorage.getItem('acess') === 'teste123') {
            setAcess(true);
        } else {
            setAcess(false);
        }
    }, [access])
    const [password, setPassword] = useState("");
    return (
        <form className="ui form" onSubmit={e => {
            e.preventDefault();
            localStorage.setItem('acess', password);
        }}>
            <div className="field">
                <input id="name" value="Admin" disabled />                
            </div>
            <div className="field">     
                <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button class="ui green button">
            Save
          </button>
        </form>
    );
}

export default LoginForm;