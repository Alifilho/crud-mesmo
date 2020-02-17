import React from 'react';

import Login from './components/login/index';
import api from './util/api';

import './index.css';

function App() {
  async function handleCreateUser(data) {
    await api.post('/users', data);
  }

  return (
    <Login onSubmit={handleCreateUser}/>
  );
}

export default App;
