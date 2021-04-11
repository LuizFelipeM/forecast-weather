import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ReactComponent as UnipLogo } from './logo-unip.svg';
import './styles.css'

const Information: React.FC = () => (
  <Row className="justify-content-md-center">
    <Col lg={3}>
      <ul>
        <li>Turma: CP9P01</li>
        <li>Nome: Luiz Felipe Muniz Moura</li>
        <li>RA: D1614F-5</li>
      </ul>
    </Col>
    <Col>
      Repositórios:
      <ul>
        <li>
          <a href="https://github.com/LuizFelipeM/forecast-weather" target="_blank" rel="noreferrer">
            Frontend React
          </a>
        </li>
        <li>
          <a href="https://github.com/LuizFelipeM/forecast-weather-api" target="_blank" rel="noreferrer">
            Backend Python
          </a>
        </li>
      </ul>
    </Col>
    <Col>
      <UnipLogo/>
    </Col>
  </Row>
)

export default Information;