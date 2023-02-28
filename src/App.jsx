import { useState } from 'react'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection
        heroTitle="Transforme sua equipe em uma máquina de produtividade com nosso software de gestão e engajamento!"
        desc="Experimente gratuitamente por 14 dias e aumente a produtividade da sua equipe!"
        cta="Solicite o seu teste ainda hoje!"
      ></HeroSection>
      <Section1
        title="Já imaginou como seria fácil gerenciar sua equipe com um só software?"
        desc="Descubra agora todas as funcionalidades que nosso software de engajamento e gestão de equipes oferece e simplifique sua rotina de trabalho."
      ></Section1>
      <Section2></Section2>
      <Section3
        profileIcon="./images/empresario.png"
        title="'De acordo com minha experiência, eu gostaria de levar mais motivação para as empresas através de alguns pontos. Toda essa motivação poderia ser fruto de recompensas e pontuações por metas ou tarefas executadas.'"
        nome="Gregório Hauss"
        desc="Presidente e Fundador da TeamUP! Ltda."
      />
      <Section4></Section4>
      <Footer></Footer>
    </>
  )
}

export default App;