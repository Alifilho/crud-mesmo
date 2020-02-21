import React, { useState } from 'react';

import optionsTest from '../../util/optionsTest';

function Dashboard({ onSubmit }) {
    const [ options, setOptions ] = useState([]);

    /*async function handleCreateUser(e) {
        e.preventDefault();
    
        if(isCpf(cpf)) {
            onSubmit({
                email,
                password,
                name,
                cpf,
                birthday
            });
        } else {
            alert('Invalid CPF!');
        }
    }*/

    function showInput() {
        let optionSelect = document.querySelector('select#optionsForm').value;
        switch(optionSelect) {
            case 'password':
                optionsTest('password');
                break;
            case 'name':
                optionsTest('name');
                break;
            case 'birthday':
                optionsTest('birthday');
                break;
            case 'cpf':
                optionsTest('cpf');
                break;
            default:
                console.log('Error');
        }
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
                <form className="login-form">
                <input type="password" required placeholder="Password" className="inputs password"/>
                <input type="text" required placeholder="Name" className="inputs name"/>
                <input type="date" required placeholder="Date of birthday" className="inputs birthday"/>
                <input type="text" required placeholder="CPF" className="inputs cpf"/>
                <button type="submit">Update info</button>
                </form>
            </div>
        </div>
    );
}

export default Dashboard;