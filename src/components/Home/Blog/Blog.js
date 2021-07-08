import React from "react";
import './Blog.css'
const Blog = ({ blog }) => {
  return (
    <div className="col-md-4">
      <button className="btn">
      <div className="card blog-card p-4" style={{ width: "24rem" }}>
        <div className="card-body">
          <div className="card-title d-flex">
            <img className='dr-img'
              src={blog.img}
              className="img-fluid"
              style={{ height: "60px" }}
              alt=""
            />
            <div className="ms-4">
              <h5>{blog.name}</h5>
              <h6>{blog.date}</h6>
            </div>
          </div>
          <div className='mt-4'>
            <h4 className="card-subtitle mb-2">{blog.heading}</h4>
            <p className="card-text">{blog.description}</p>
          </div>
        </div>
      </div>
      </button>
    </div>
  );
};

export default Blog;
