import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="my-5  d-flex justify-content-center">
      <div className="w-75 contact-container">
        <div className="contact-container-inner">
          <div className="text-center pt-5">
            <h5 className='text-info'>CONTACT US</h5>
            <h2>Always Connect With Us</h2>
          </div>
            <div className="px-5 pt-5 inputs-form">
              <div class="mb-3">
                <input style={{borderRadius: '0', height: '55px'}}
                  type="text"
                  class="form-control"
                  placeholder="Email Address*"
                />
              </div>
              <div class="mb-3">
                <input style={{borderRadius: '0', height: '55px'}}
                  type="text"
                  class="form-control"
                  placeholder="Subject*"
                />
              </div>
              <div class="mb-3">
                <textarea style={{borderRadius: '0'}}
                  class="form-control"
                  placeholder='Your Message*'
                  rows="3"
                ></textarea>
              </div>
              <button class="btn btn-submit btn-info">SUBMIT</button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
