import React, { useState } from 'react';
import _ from 'lodash';
import { Button, Col, Container, Row, Toast } from 'react-bootstrap';
import { IForecast } from './IForecast';
import Header from './components/Header';
import Information from './components/Information';
import { getCityForecast } from './helpers/axiosHelper';

function App() {
  const [forecast, setForecast] = useState<IForecast | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)
  const [showAbout, setShowAbout] = useState(false)
  const [woeid, setWoeid] = useState<string | undefined>(undefined)

  const handleClick = () => {
    setShowAbout(false)

    if(_.isEmpty(woeid) || /\d/.test(String(woeid)))
      getCityForecast(woeid)
        .then(setForecast)
        .catch(setError)
    else
      setError('WOEID inválido, por favor insira um WOEID válido (composto apenas por números), ou deixe o campo de WOEID vazio para buscar pela sua localização atual.')
  }

  return (
    <>
      <Header />
      <Container fluid>
        <Toast
          className="notification error"
          show={!_.isEmpty(error)}
          onClose={() => setError(undefined)}
          delay={5000}
          autohide
        >
          <Toast.Header>
            Erro ao obter informações climáticas
          </Toast.Header>
          <Toast.Body>
            {error}
          </Toast.Body>
        </Toast>
        <Row className="justify-content-md-center" style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Col lg={2}>
            <input
              value={woeid}
              onChange={({ target: { value } }) => setWoeid(value)}
              className="form-control"
              placeholder="Insira o WOEID"
            />
          </Col>
          <Col className="text-center" lg={2}>
            <Button onClick={handleClick}>
              Buscar informações
            </Button>
          </Col>
          <Col className="text-center" lg={2}>
            <Button onClick={() => setShowAbout(show => !show)}>
              Sobre Forecast Weather
            </Button>
          </Col>
        </Row>
        {showAbout ? <Information /> :
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
