import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Rutes from './components/Rutes';
import Refugis from './components/Refugis';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-primary card'>
      <Header />
    </div>
    <nav>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="/" className='nav-link'>Inici</a>
        </li>
        <li className="nav-item">
          <a href="/refugis" className='nav-link'>Refuigs</a>
        </li>
        <li className="nav-item">
          <a href="/rutes" className='nav-link'>Rutes</a>
        </li>
      </ul>
    </nav>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/refugis" element={<Refugis />}>
          <Route path=":id" element={<Refugis />} />
        </Route>
        <Route path="/rutes" element={<Rutes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
