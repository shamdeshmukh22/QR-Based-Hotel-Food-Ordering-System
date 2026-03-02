import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import './index.css';
import Shop from './pages/Shop';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Feedback from './pages/FeedBack';
import Card from './pages/Card';
const root =createRoot(document.getElementById('root'));
// require ("../public/images");
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/card' element={<Card/>}></Route>
    <Route path='/service' element={<Services/>}></Route>
    <Route path='/feedback' element={<Feedback/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
);
