import React from 'react';
import { Link } from 'react-router-dom';

const LocationMap = ({ location }) => {
  return (
    <div>
      <h2>Mappa della Posizione Corrente</h2>
      <p>Posizione corrente sulla mappa:</p>
      <div style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}>
       {/* Location={location} /> */}
      </div>
      <br />
      <Link to="/">Torna alla posizione corrente</Link>
    </div>
  );
};

export default LocationMap;