import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-white pt-4 pb-2 mt-4">
        <Container>
          <Row className="justify-content-center mb-2 align-items-center"> 
            <Col xs="auto">
              <img src={`${process.env.PUBLIC_URL}/images/logo3.webp`} alt="JobFlow Logo" style={{ height: '60px' }} />
            </Col>
            <Col className="d-flex justify-content-center"> 
              <a href="https://github.com/zhaolucas" className="text-white mx-2"><FaGithub size={24} /> Lucas </a>
              <a href="https://github.com/BenA251" className="text-white mx-2"><FaGithub size={24} /> Ben </a>
              <a href="https://github.com/SophieEbby" className="text-white mx-2"><FaGithub size={24} /> Sophie </a>
              <a href="https://github.com/englburc" className="text-white mx-2"><FaGithub size={24} /> Levan </a>
              <a href="https://github.com/michaelerg" className="text-white mx-2"><FaGithub size={24} /> Michael </a>
            </Col>
          </Row>
        </Container>
      </footer>
      
    );
  }
  
  export default Footer;