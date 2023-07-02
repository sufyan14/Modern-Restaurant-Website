import React from 'react';

import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Our kitchen boutique is conveniently located in the heart of the city, nestled amidst vibrant culinary destinations. Whether you're a local or a traveler seeking culinary inspiration, our easily accessible location makes it simple to embark on a delightful journey of discovering the finest kitchen essentials. Visit us today and let your culinary aspirations come to life at Gusto Grill.</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0'}}>Open Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 03:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
