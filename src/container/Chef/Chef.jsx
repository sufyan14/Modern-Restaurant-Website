import React from 'react';

import { SubHeading } from '../../components'
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's World"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>
          Chef Kevin Luo, a culinary virtuoso, believes that food is a language that transcends cultural boundaries and creates meaningful connections. With a firm belief in the power of exceptional ingredients, Chef Kevin strives to source the finest locally-sourced produce and artisanal products to create gastronomic masterpieces. 
          </p>
        </div>  
        <p className='p__opensans'>Chef Kevin's unwavering commitment to excellence and his dedication to sharing his passion for food with others make him a true culinary maestro.</p>   
      </div> 

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign"/>
      </div>

    </div>
  </div>
);

export default Chef;
