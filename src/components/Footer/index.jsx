import React from 'react';
import './Footer.css';

const Footer = () => {

  const logo = "./images/logotipo_navbar.png";

  let date = new Date();
  date = date.getFullYear();

  const footer_links = [
    {
      group: "Empresa",
      links: ['Sobre nós', 'Contato', 'Carreiras', 'Jurídico']
    },
    {
      group: "Mais infos.",
      links: ['Termos & Condições', 'Política de Privacidade']
    },
    {
      group: "Siga-nos",
      links: ['LinkedIn', 'Instagram', 'Facebook', 'Youtube']
    }
  ]
  let teste = footer_links.links;
  console.log(teste);

  return (
    <>
      <section className='footer'>
        <div className='container'>
          <div className='brand'>
            <img src={logo}/>
            <p>© {date}</p>
          </div>
          <div className='link-main'>
            {/* Impletentação */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;

{/* <div className='link'>
              <h2>Empresa</h2>
              <ul>
                <li><a href='#'>Sobre nós</a></li>
                <li><a href='#'>Sobre nós</a></li>
                <li><a href='#'>Sobre nós</a></li>
                <li><a href='#'>Sobre nós</a></li>
                <li><a href='#'>Sobre nós</a></li>
              </ul>
            </div> */}