import { useState } from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/Navbar'
import Section1 from './components/Section1'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection
        heroTitle="Transforme sua equipe em uma máquina de produtividade com nosso software de gestão e engajamento para sua equipe!"
        desc="Experimente gratuitamente por 14 dias e aumente a produtividade da sua equipe!"
        cta="Solicite o seu teste ainda hoje!"
      ></HeroSection>
      <Section1
        title="Já imaginou como seria fácil gerenciar sua equipe com um só software?"
        desc="Descubra agora todas as funcionalidades que nosso software de engajamento e gestão de equipes oferece e simplifique sua rotina de trabalho."
      ></Section1>
    </>
  )
}

export default App