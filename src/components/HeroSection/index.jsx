import React from 'react';
import './HeroSection.css';

const HeroSection = (props) => {
  return (
    <>
      <header>
        <div className='container'>
          <section className='box'>
            <h1>{props.heroTitle}</h1>
            <p>{props.desc}</p>
            <button><a href="#">{props.cta}</a></button>
          </section>
        </div>
      </header>
    </>
  )
}

export default HeroSection;