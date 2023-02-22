import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Registration from './Pages/Registration/Registration';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signin from './Pages/SignIn/Signin';
import Navbar from './components/Navbar/Navbar';
import { RecoilRoot } from 'recoil';
import Home from './Pages/Home/Home';
import Invoice from './Pages/Invoice/Invoice';
import Prescription from './Pages/Prescription/Prescription';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RecoilRoot>
    <BrowserRouter>
   
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Registration/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/invoice" element={<Invoice/>}/>
      <Route path="/prescription" element={<Prescription/>}/>
    </Routes>

    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
