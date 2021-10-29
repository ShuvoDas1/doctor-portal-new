import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{height: '640px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: "#3A4256"}}>Your New Smile <br/> Start Here</h1>
                <p className='text-secondary mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in voluptate expedita velit doloremque maiores.</p>
                <Link to='/appointment'><button  style={{borderRadius: "0px",border: 'none',padding: '10px 15px'}} className="btn appointment-btn mt-3 text-white">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;