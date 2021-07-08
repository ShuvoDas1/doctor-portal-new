import React from "react";
import Ellipse1 from "../../../images/Ellipse1.png";
import Ellipse2 from "../../../images/Ellipse2.png";
import Ellipse3 from "../../../images/Ellipse3.png";
import Blog from "./../Blog/Blog";

const blogsData = [
  {
    name: "Dr.Rashed Kobir",
    img: Ellipse1,
    date: "28 Aug 2018",
    heading: "check at least a doctor in a year for your tooth",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ea blanditiis omnis vel. Enim, quo!",
  },
  {
    name: "Dr.Caudi",
    img: Ellipse2,
    date: "28 Aug 2018",
    heading: "2 times of in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ea blanditiis omnis vel. Enim, quo!",
  },
  {
    name: "Dr.Rashed Kobir",
    img: Ellipse3,
    date: "28 Aug 2018",
    heading: "The tooth cancer is takeing a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ea blanditiis omnis vel. Enim, quo!",
  },
];

const Blogs = () => {
  return (
    <section className="my-5 py-3">
      <div className="text-center">
        <h4 className='text-info'>OUR BLOG</h4>
        <br />
        <h2>From Our Blog News</h2>
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <div className="row">
          {blogsData.map((blog) => (
            <Blog blog={blog}></Blog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
