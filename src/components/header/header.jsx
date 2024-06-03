import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../assets/1.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <section id='header' className='header'>
      <div className='logosocial'>
        <h2 className='logo'>Khushi Anand</h2>
        <p className='pipe'> | </p>
        <HeaderSocials />
      </div>
  

      {/* <h2 className='logo'>manushiez</h2>
      <HeaderSocials /> */}
  <div className="container header__container">
    <div className='header__content'>

      <h5>Hello I'm</h5>
      <h1 className='name'>KHUSHI ANAND</h1>
      <h5 className='text-black'>IT student , FullStack Developer , Digital artist and a Anime Enthusiast  </h5>
      <CTA />
    </div>

    {/* <div className='header__me'>
          <img src={me} alt="header__me" />
        </div> */}

    {/* <a href='#contact' className='scroll__down'>Scroll Down</a> */}
  </div>
    </section >
  );
}

export default Header;


