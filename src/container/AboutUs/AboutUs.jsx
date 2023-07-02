import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G"/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>Welcome to Gusto Grill, your ultimate kitchen destination. We offer a curated selection of high-quality kitchen tools, appliances, and accessories to elevate your cooking experience. Join our vibrant community of food enthusiasts, explore our blog for recipes and tips, and let us help you unlock the full potential of your kitchen. Gusto Grill: Where culinary passion meets exceptional taste.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content-knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>Gusto Grill has a rich history deeply rooted in our love for exceptional cuisine.A vision to create a space where food enthusiasts could find the finest kitchen essentials.Our journey has been fueled by a relentless passion for culinary excellence. From humble beginnings to becoming a renowned online destination, we have grown alongside our loyal community of home cooks and professional chefs. </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
