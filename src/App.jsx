import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
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
          <Route path='/:id' element={ <Guard > <Detail /> </Guard> } />
          <Route path='/create' element={ <Guard > <CreateProduct /> </Guard> } />
          <Route path='*' element={<h1 className=' bg-rose-600 text-white p-3'>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App