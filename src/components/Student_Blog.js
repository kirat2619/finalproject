import React from 'react';
import vedio from './vedios/background_vedio.mp4';
import './Student_Blog.css';
import logo5 from "./images/logo.svg";


export default function Student_Blog() {
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
            </div>
            <div className="heading">
                <h1><b>STUDENT BLOG</b></h1>
            </div>
            </>
            );
}
