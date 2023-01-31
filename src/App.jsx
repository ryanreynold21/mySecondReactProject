import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Guard from './components/Guard';
import CreateProduct from './components/products/CreateProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Guard > <Dashboard /> </Guard> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/create' element={ <Guard > <CreateProduct /> </Guard> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App