import React from 'react';
import './loader.css';

export default function Loader() {
  return (
    <div className="loader" style={{width: window.innerWidth, height: window.innerHeight}}>
      <div className="spinner"></div>
    </div>
  );
}
