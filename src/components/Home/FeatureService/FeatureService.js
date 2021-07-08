import React from "react";
import feature from "../../../images/feature.png";
import './FeatureService.css'
const FeatureService = () => {
  return (
    <section className='d-flex justify-content-center mt-5 pt-5 feature-container'>
      <div className="row w-75">
        <div className="col-md-5">
            <img src={feature} className="img-fluid feature-img" alt="" />
        </div>
        <div className="col-md-7 mt-4">
            <h2>Exceptional Dental <br /> Care, On Yours Terms</h2>
            <p className='mt-5  text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati facere veniam accusamus id cum et maxime labore, ea reprehenderit voluptas. Quam temporibus neque aspernatur cum maiores repellendus odit, a aliquid facilis sapiente esse, ab ratione reprehenderit! Mollitia aperiam eveniet itaque pariatur nisi fuga in perferendis ea, beatae tempore adipisci reprehenderit.</p>
            <button className='btn btn-info text-white mt-5'>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureService;
