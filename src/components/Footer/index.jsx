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

  return (
    <>
      <section className='footer'>
        <div className='container'>
          <div className='brand'>
            <img src={logo}/>
            <p>© {date}</p>
          </div>
          <div className='link-main'>
            {footer_links.map((item, index) => (
              <div className='link' key={index}>
                <h2>{item.group}</h2>
                <ul className='footer-list'>
                  {footer_links[index].links.map((link, index) => (
                    <li key={index}><a href='#'>{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;