import React, { useState } from 'react';

//import isCpf from '../../util/cpfTest';

import './style.css';

function Dashboard({ onSubmit }) {
    const [ options, setOptions ] = useState([]);

    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ cpf, setCpf ] = useState("");
    const [ birthday, setBirthday ] = useState("");

    async function handleUpdateUser(e) {
        e.preventDefault();
    }

    function showInput() {
        let optionSelect = document.querySelector('select#optionsForm').value;
        document.querySelector('div.form').style.display = "block";
        document.querySelector('form.login-form').style.display = "grid";

        switch(optionSelect) {
            case 'password':
                if(!options.includes('password')) {
                    setOptions([...options, 'password']);
                    document.querySelector('input.password').style.display = "block";
                    document.querySelector('button.password').style.display = "block";
                }
                break;
            case 'name':
                if(!options.includes('name')) {
                    setOptions([...options, 'name']);
                    document.querySelector('input.name').style.display = "block";
                    document.querySelector('button.name').style.display = "block";
                }
                break;
            case 'birthday':
                if(!options.includes('birthday')) {
                    setOptions([...options, 'birthday']);
                    document.querySelector('input.birthday').style.display = "block";
                    document.querySelector('button.birthday').style.display = "block";
                }
                break;
            case 'cpf':
                if(!options.includes('cpf')) {
                    setOptions([...options, 'cpf']);
                    document.querySelector('input.cpf').style.display = "block";
                    document.querySelector('button.cpf').style.display = "block";
                }
                break;
            default:
                console.log('Error');
        }
    }

    function eraseInput(classInput) {
        document.querySelector(`input.${classInput}`).style.display = "none";
        document.querySelector(`button.${classInput}`).style.display = "none";
        let opt = options.splice(classInput, 1);
        setOptions([opt]);
    }

    return(
        <div className="dashboard-page">
            <label htmlFor="optionsForm">
                <select name="form" id="optionsForm">
                    <option value="password">Password</option>
                    <option value="name">Name</option>
                    <option value="birthday">Birthday</option>
                    <option value="cpf">CPF</option>
                </select>
                <button onClick={showInput}>Show Option</button>
            </label>

            <div className="form">
                <form className="login-form" onSubmit={handleUpdateUser}>
                    <input type="password" value={password} required placeholder="Password" className="inputs password" onChange={e => setPassword(e.target.value)}/>
                    <button onClick={() => eraseInput("password")} className="b password">X</button>

                    <input type="text" value={name} required placeholder="Name" className="inputs name" onChange={e => setName(e.target.value)}/>
                    <button onClick={() => eraseInput("name")} className="b name">X</button>

                    <input type="date" value={birthday} required placeholder="Date of birthday" className="inputs birthday" onChange={e => setBirthday(e.target.value)}/>
                    <button onClick={() => eraseInput("birthday")} className="b birthday">X</button>

                    <input type="text" value={cpf} required placeholder="CPF" className="inputs cpf" onChange={e => setCpf(e.target.value)}/>
                    <button onClick={() => eraseInput("cpf")} className="b cpf">X</button>
                    <button type="submit">Update info</button>
                </form>
            </div>
        </div>
    );
}

export default Dashboard;