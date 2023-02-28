import React from 'react';
import './Section2.css';

const Section2 = () => {

  const checklist = [
    {
      img: "./images/icon/marcador.png",
      desc: "Aumento da produtividade e eficiência através da organização e distribuição eficiente de tarefas."
    },
    {
      img: "./images/icon/marcador.png",
      desc: "Melhora na colaboração e comunicação entre os membros da equipe, permitindo um trabalho mais eficaz e coordenado."
    },
    {
      img: "./images/icon/marcador.png",
      desc: "Acompanhamento e análise de desempenho da equipe e de cada membro, identificando áreas de melhoria e tomando medidas para melhorar o desempenho geral."
    },
  ]

  return (
    <>
      <section className='section2'>
        <div className='content'>
          <div className='imgSide'>
            <img src={'./images/macbook1.png'} className='leftImg'/>
          </div>
          <div className='textSide'>
            <h2 className='title'>Ter uma plataforma de gestão de equipes oferece vários benefícios, incluindo:</h2>
            {checklist.map((item, index) => (
              <div className='checklist' key={index}>
                <img src={item.img}/>
                <p>{item.desc}</p>
              </div>
            ))}
            <a href='#' className='CTA'>
              <div className="Button">
              <div className='components'>
                <img src='./images/icon/setinha.png'/>
                <p>Assistir Apresentação</p>
              </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section2;