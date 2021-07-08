import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Doctor = ({doctor}) => {
    return (
        <div className='col-md-4'>
            <img style={{height: '350px', width: '300px'}} src={doctor.img} alt="" />
            <div className='text-center mt-2'>
                <h5 style={{fontWeight: '600'}}>{doctor.name}</h5>
                <p><FontAwesomeIcon icon={faPhone} />{doctor.phone}</p>
            </div>
        </div>
    );
};

export default Doctor;