import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
    <Route path="/" element={App} />
    {/* <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/product' element={<ProductPage />} />
    <Route path='/login' element={<Login />} /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
