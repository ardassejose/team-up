import React from 'react'
import './Section1.css';

const Section1 = (props) => {
  const cards = [
    {
      img: "./images/icon1.png",
      title: "Acesse em qualquer dispositivo",
      desc: "Acesse em qualquer dispositivo, a qualquer hora e em qualquer lugar."
    },
    {
      img: "./images/icon2.png",
      title: "Aumente a produtividade",
      desc: "Organize, priorize e acompanhe o progresso de tarefas com eficiência e eficácia."
    },
    {
      img: "./images/icon3.png",
      title: "Melhore a tomada de decisões",
      desc: "Obtenha relatórios detalhados de produtividade para monitorar o desempenho e tomar decisões mais informadas."
    }
  ]

  return(
    <section className='section1'>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <div className='card-group'>
        {cards.map((item, index) => (
        <div className='card'>
          <img src={item.img}/>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
        ))}
      </div>
    </section>
  )
}

export default Section1;