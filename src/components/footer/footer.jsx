import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Khushi</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__copyright">
        <small>&copy; Khushi Anand. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer