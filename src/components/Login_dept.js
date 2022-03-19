import React from 'react';
import vedio from './vedios/background_vedio.mp4';
import './Login_dept.css';
import logo5 from "./images/logo.svg";

export default function Login_dept() {
    return (
        <>
            <div className="imgs">
                <div className="cantainer image">
                    <img src={logo5} alt="logo5" className="logo5" />
                    <button className="class">About</button>
                </div>
            </div>
            <div className='container'>
                <div className="vedio">
                    <video autoPlay loop muted>
                        <source src={vedio} type="video/mp4" />
                    </video>
                    <div className="overlay"></div>
                </div>
                <div className='box'>
                    <form className='form1'>
                        <div className='name'>
                            <label className='label'><b>UserName&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
                            <input type="text" className='input' name='UserName' />
                        </div>
                        <div className='name'>
                            <label className='label'><b>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
                            <input type="text" className='input' name='password' />
                        </div>
                        <div className='name'>
                            <label className='label'><b>Department&nbsp;&nbsp;</b></label>
                            <input type="text" className='input' name='Department' />
                        </div>
                        <div className='button'>
                            <button className='submit' >Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
