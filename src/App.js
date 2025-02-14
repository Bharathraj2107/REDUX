import React from 'react'
import Menu from './Component/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Update from './Pages/Update'
import Login from './Pages/Login'
import Register from './Pages/Register'
import NotFound from './Pages/NotFound'
import { ToastContainer } from 'react-toastify'


function App(props) {
  return (
  <BrowserRouter>
    <Menu />
        <ToastContainer position={"top-center"} autoClose={3000} />
        <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/create`} element={<Create />} />
            <Route path={`/edit/:transId`} element={<Update />} />
            <Route path={`/login`} element={<Login />} />
            <Route path={`/Register`} element={<Register />} />
            <Route path={`/*`} element={<NotFound />} />
        </Routes>
  </BrowserRouter>
  )
}

export default App