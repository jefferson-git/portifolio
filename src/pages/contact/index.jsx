import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../contact/itemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/jefferson-528b66238
          " 
        />
         <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/jefferson-git" 
        />     
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="jefferson.ads.go@gmail.com" 
        />
      </Content>
    </Container>
  )
}