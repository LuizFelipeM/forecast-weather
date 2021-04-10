import React from 'react';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css'

const Header: React.FC = () => (
  <header className="navbar navbar-expand-lg navbar-dark bg-dark">
    <FontAwesomeIcon icon={faUmbrella} size="3x" inverse />
    <h1>Forecast Weather</h1>
  </header>
)

export default Header;