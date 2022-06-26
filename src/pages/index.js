import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou JEFFERSON</Name>
        <Function>Estudante tecnologia da informação </Function>
        <Intro>Graduando em análise e desenvolvimento de sistemas, 
          tenho projetos Web desenvolvidos com as seguintes tecnologias
          (JAVA, SPRING BOOT, TYMELEAF, BANCO DE DADOS POSTGRESQL)  
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/imagem.png"  alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}