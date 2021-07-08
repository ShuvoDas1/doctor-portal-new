import React from 'react';
import Header from './../Header/Header';
import OurServices from './../OurServices/OurServices';
import FeatureService from './../FeatureService/FeatureService';
import MakeAppointment from './../MakeAppointment/MakeAppointment';
import Testimonial from './../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';
import OurDoctors from './../OurDoctors/OurDoctors';
import Contact from './../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurServices></OurServices>
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <OurDoctors></OurDoctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;