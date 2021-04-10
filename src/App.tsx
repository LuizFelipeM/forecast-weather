import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Button, Col, Container, Row, Toast } from 'react-bootstrap';
import { IForecast } from './IForecast';
import Header from './components/Header';

function App() {
  const baseUrl = 'https://forecast-weather-api-eci.herokuapp.com/'

  const [forecast, setForecast] = useState<IForecast | undefined>(undefined)
  const [error, setError] = useState(undefined)
  const [showAbout, setShowAbout] = useState(false)

  const handleClick = (city: string) => () => {
    setShowAbout(false)
    axios.get<IForecast>(`${baseUrl}/forecast?city=${city}`)
      .then(({ data }) => setForecast(data))
      .catch(setError)
  }

  return (
    <>
      <Header />
      <Container fluid>
        <Toast show={!_.isEmpty(error)} onClose={() => setError(undefined)} delay={5000} autohide>
          <Toast.Header>
            Erro ao obter informações climáticas
          </Toast.Header>
          <Toast.Body>
            {error}
          </Toast.Body>
        </Toast>
        <Row className="justify-content-md-center" style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Col className="text-center" lg={2}>
            <Button onClick={handleClick('SP')}>
              Visualizar clima
            </Button>
          </Col>
          <Col className="text-center" lg={2}>
            <Button onClick={() => setShowAbout(show => !show)}>
              Sobre
            </Button>
          </Col>
        </Row>
        {showAbout ?
          <Row className="justify-content-md-center">
            <Col>
              CP9P01 - Luiz Felipe Muniz Moura - D1614F-5
            </Col>
          </Row> :
        forecast &&
          <Row className="justify-content-md-center">
            <Col>
              {forecast.city_name} terá {forecast.description} com temperatura de {forecast.temp}, podendo obter máxima de {forecast.max_temp} e mínima de {forecast.min_temp}
            </Col>
          </Row>}
      </Container>
    </>
  );
}

export default App;
