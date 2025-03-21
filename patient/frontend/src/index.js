import {React} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home.js'
import Dashboard from './Dashboard.js'
import Search from './Search.js';
import SelectAppointment from './SelectAppointment.js';
import BookAppointment from './BookAppointment.js';


import reportWebVitals from './reportWebVitals';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/search' element={<Search />} />
        <Route path='/selectAppointment' element={<SelectAppointment />} />
        <Route path='/bookAppointment' element={<BookAppointment/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
