import React from 'react'
import './portfolio.css'
import img1 from '../../assets/project2.png'
import img2 from '../../assets/project_2.png'


const portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio_item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>

          <h3>Minimalist Introduction Website UI</h3>
          <p>Developed and deployed a responsive Portfolio website on Github, showcasing UI design skills and web development skills – React Native, Node.js, HTML, CSS, JavaScript, Github, 
            Bootstrap</p>

          <div className="portfolio__item-cta">
            <a href="https://github.com/khushianand/Intro-website?tab=readme-ov-file" className='btn' target='_blank' rel='noreferrer' >Github</a>
            <a href="https://khushianand.github.io/Intro-website/" className='btn btn-primary' target='_blank' rel='noreferrer' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>

          <h3>Study Website</h3>
          <p>Minimalist easy-scroll webite various segments and sections for add on's, Intresting UI using HTML, Css, Javascript. Enjoy your learning journey.</p>

          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default portfolio