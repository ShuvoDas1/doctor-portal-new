import React from 'react';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main className="row">
            <div className="col-md-4 offset-md-1">
                <h2>Your New Smile <br/> Start Here</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in voluptate expedita velit doloremque maiores.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;