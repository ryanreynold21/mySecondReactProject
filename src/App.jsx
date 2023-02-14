import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Guard from './components/Guard';
import Success from './components/Success';
import CartItem from './pages/CartItem';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
    <Routes>
          <Route path='/' element={ <Guard > <Dashboard /> </Guard> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/product/:id' element={ <Guard > <Detail /> </Guard> } />
          <Route path='/cartitem' element={ <Guard > <CartItem /> </Guard> } />
          <Route path='/success' element={ <Guard > <Success /> </Guard> } />
          <Route path='*' element={<h1 className=' bg-rose-600 text-white p-3'>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App