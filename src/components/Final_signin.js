import React, { useState } from 'react';
import './Final_signin.css';
import vedio from './vedios/background_vedio.mp4';
import logo5 from "./images/logo.svg";

const Final_signin = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    const formsubmit = (event) => {
        event.preventDefault();
    }
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
                            <label className='label'><b>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
                            <input type="text" className='input' name='name'  />
                        </div>
                        <div className='name'>
                            <label className='label'><b>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
                            <input type="text" className='input' name='email'  />
                        </div>
                        <div className='name'>
                            <label className='label'><b>Password</b></label>
                            <input type="text" className='input' name='password'  />
                        </div>
                        <div className='name'>
                            <label className='label'><b>Confirm<br />password</b></label>
                            <input type="text" className='input' name='confirmpassword'  />
                        </div>
                        <div className='button'> 
                            <button className='submit' onClick={formsubmit}>sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Final_signin;
