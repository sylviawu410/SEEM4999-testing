//testing

import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {
  const [heading, setHeading] = useState('Welcome Back!');
  const [subheading, setSubheading] = useState('Enter your iAM Smart Credentials');
  const handleClick = () => {
    setHeading('This page is for iAM Smart user only');
    setSubheading('Please login and retry again');
  };
  return (
    <div className="public-page flex flex-row">
      
      <form className='m-auto w-1/3 flex-col flex gap-3'>
        <h2 className="text-2xl font-medium" id="heading">{heading}</h2>
        <h3 className="font-medium mb-12" id='subheading'>{subheading}</h3>
        <label htmlFor="email-input" className="blocktext-gray-900 font-medium">Email address</label>
        <input type="email" id="email-input" aria-describedby="helper-text-explanation" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" required />

        <label htmlFor="password-input" className="blocktext-gray-900 font-medium">Password</label>
        <input type="text" id="password-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your password" required />
        <button onClick={()=>handleClick()} type="button" className="font-semibold text-white bg-lime-900 rounded-[10px] pt-[7px] pb-[7px] mt-4">Login</button>
        <div className="m-auto flex">
        <p>Don’t have an account?&nbsp;</p>
        <a className="text-sky-700 " href="https://www.iamsmart.gov.hk/en/reg.html">Sign Up</a>
        </div>
        
      </form>
      <img className="h-auto w-2/5" src="../images/background.png" alt="background" />
    </div>
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
