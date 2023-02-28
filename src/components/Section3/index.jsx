import React from 'react'
import './Section3.css';

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
    <section className='section3'>
      <img src={props.profileIcon}/>
      <h2>{props.title}</h2>
      <p>{props.nome}</p>
      <p>{props.desc}</p>
      <img src={'./images/icon/estrelas.png'}/>
    </section>
  )
}

export default Section1;