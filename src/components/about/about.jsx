import React from 'react'
import './about.css'
import ME from '../../assets/p4.jpg'

const about = () => {
  return (
    <section id='about' className='about'>
      <div className="about__bg-image"></div>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="about__me" />
          </div>
        </div>



        <div className='about__content'>
          <p>
          Hey there! I'm Khushi, a full-stack developer who's passionate about creating amazing web experiences. I have a toolkit that includes React Native, Node.js, Python, and I love using these skills to build innovative solutions.
          In addition to coding, I also serve as the Designing Head at the Pragmatic Fashion Society, The Fashion Club, where I enjoy coming up with creative event ideas. I'm all about making technology and events enjoyable and engaging. Let's work together to bring your digital projects to life with a touch of fun and flair!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>

    </section>
  )
}

export default about 