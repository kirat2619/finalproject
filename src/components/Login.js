import React from 'react';
import culogo from './images/logo.svg';
import './Login.css';
import vedio from './vedios/background_vedio.mp4';

export default function Login() {
  return (
    <>
      <div className='container1'>
        <img src={culogo} alt="logo5" className='logo' />
        <button className='loginsubmit'>About</button>
      </div>


      <div className="vedio">
        <video autoPlay loop muted>
          <source src={vedio} type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-dark" type="button">LOGIN AS STUDENT</button>
          <button class="btn btn-dark" type="button">LOGIN AS ADMINISTRATOR</button>
        </div>
    </>
  );
}
