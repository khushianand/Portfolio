import React, { useEffect } from 'react';
import Header from './components/header/header.jsx';
import Nav from './components/nav/nav.jsx';
import About from './components/about/about.jsx';
import Skills from './components/skills/skills.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
// import Da from './components/da/da.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';

const App = () => {
  useEffect(() => {
    // Create a custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor', 'cursor--circle'); // Add cursor class
    document.body.appendChild(cursor);

    // Add event listener for mouse movement to update the cursor position
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // Cleanup when the component unmounts
    return () => {
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      {/* <Da /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
