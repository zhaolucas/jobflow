import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import style from './style.css';

function Footer() {
    return (
      <footer className="footer">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs="auto">
              <img src={`${process.env.PUBLIC_URL}/images/logo3.webp`} alt="JobFlow Logo" className="footer-logo" />
            </Col>
            <Col className="text-center">
              <div className="d-flex justify-content-center">
                <a href="https://github.com/zhaolucas" className="footer-link mx-2"><FaGithub size={40} /> lucas </a>
                <a href="https://github.com/BenA251" className="footer-link mx-2"><FaGithub size={40} /> ben </a>
                <a href="https://github.com/SophieEbby" className="footer-link mx-2"><FaGithub size={40} /> sophie </a>
                <a href="https://github.com/englburc" className="footer-link mx-2"><FaGithub size={40} /> levan </a>
                <a href="https://github.com/michaelerg" className="footer-link mx-2"><FaGithub size={40} /> michael </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
  
  export default Footer;