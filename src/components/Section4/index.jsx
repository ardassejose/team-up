import React from 'react'
import './Section4.css';

const Section4 = (props) => {
  const lojas = [
    {
      link: "https://apps.apple.com/br/story/id1631323611?itscg=10000&itsct=",
      logo: "./images/icon/apple.png",
      cta: "Download para IOS"
    },
    {
      link: "https://play.google.com/store/apps/details?id=com.roblox.client",
      logo: "./images/icon/googleplay.png",
      cta: "Download para Android"
    }
  ]

  return(
    <section className='section4'>
      <h1>Conheça o nosso aplicativo mobile!</h1>
      <h2>Disponível nas principais lojas mobile</h2>
      <div className='lojaApps'>
          {lojas.map((item, index) => (
            <button key={index} className="buttonLoja">
              <a href={item.link} className='loja'>
              <img src={item.logo}/>
              <p>{item.cta}</p>
              </a>
            </button>
          ))}
      </div>
    </section>
  )
}

export default Section4;