import React from "react";
import './ClientReview.css'
const ClientReview = ({ review }) => {
  return (
    <div className="col-md-4">
      <div className="card review-card p-3" style={{width: "24rem"}}>
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur culpa nam alias perspiciatis velit placeat corrupti rem quasi temporibus!
          </p>
          <div className='d-flex mt-5'>
              <img src={review.img} className='img-fluid' style={{height: '60px'}} alt="" />
              <div className='ms-3 mt-1'>
                  <h5 className='text-info'>{review.name}</h5>
                  <h6>{review.location}</h6>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
