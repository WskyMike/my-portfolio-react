import React from 'react';
import './Loader.css';

function Loader({ className = '' }) {
  return <div className={`loader ${className}`} />;
}

export default Loader;
