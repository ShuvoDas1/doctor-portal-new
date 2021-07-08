import React from "react";
import Elipse1 from "../../../images/Ellipse1.png";
import Elipse2 from "../../../images/Ellipse2.png";
import Elipse3 from "../../../images/Ellipse3.png";
import ClientReview from "./../ClientReview/ClientReview";

const ClientReviewData = [
  {
    img: Elipse1,
    name: "David warner",
    location: "California",
  },
  {
    img: Elipse2,
    name: "Ema Smith",
    location: "London",
  },
  {
    img: Elipse3,
    name: "Winson Herry",
    location: "London",
  },
];

const Testimonial = () => {
  return (
    <section className="my-5 pt-5">
      <div className="container" style={{marginLeft: '150px'}}>
        <h5 style={{ color: "#10CFE6" }}>TESTIMONIAL</h5>
        <h1>
          What's Ours Patients <br /> Says
        </h1>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="row">
          {ClientReviewData.map((review) => (
            <ClientReview review={review}></ClientReview>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
