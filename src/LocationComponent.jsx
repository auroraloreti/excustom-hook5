import React, { useEffect } from 'react';
import useCurrentLocation from './useCurrentLocation';
import { Link } from 'react-router-dom';

const LocationComponent = () => {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  useEffect(() => {
    if (location) {
      console.log('Posizione corrente:', location);
    }
    if (error) {
      console.error('Errore nel recupero della posizione:', error);
    }
  }, [location, error]);

  return (
    <div>
      <h2>Posizione Corrente</h2>
      {loading ? (
        <p>Caricamento...</p>
      ) : error ? (
        <p>Errore: {error.message}</p>
      ) : (
        location && (
          <div>
            <p>
              La tua posizione corrente è: {location.latitude}, {location.longitude}
            </p>
            <Link to="/map">Visualizza sulla mappa</Link>
          </div>
        )
      )}
      <button onClick={getCurrentLocation}>Ottieni posizione corrente</button>
    </div>
  );
};

export default LocationComponent;