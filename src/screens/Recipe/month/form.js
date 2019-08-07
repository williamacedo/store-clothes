import React, { useState } from 'react';
import { setAcessRecipe } from '../../../functions/recipe';

const LoginForm = ({ setAcess }) => {
    const [password, setPassword] = useState("");  
    return (
        <form className="ui form" onSubmit={e => {
            e.preventDefault();
            localStorage.setItem('acess', password);
            setAcessRecipe(setAcess, password);
        }}>
            <h1>Acesso</h1>
            <div className="field">
                <input id="name" value="Admin" disabled />                
            </div>
            <div className="field">     
                <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button class="ui green button">
            Entrar
          </button>
        </form>
    );
}

export default LoginForm;