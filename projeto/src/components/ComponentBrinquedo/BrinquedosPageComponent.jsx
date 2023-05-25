import React from 'react';
import BrinquedoComponent from './BrinquedoComponent';
import './Brinquedo.css';
import { Link } from 'react-router-dom';

function BrinquedosPageComponent() {
  return (
    <>
      <Link to="/">Página principal</Link>
      <BrinquedoComponent />
    </>
  )
}

export default BrinquedosPageComponent;