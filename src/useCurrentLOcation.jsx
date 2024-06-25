import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
            setLoading(false);
          },
          (error) => {
            setError(error);
            setLoading(false);
          }
        );
      } else {
        setError(new Error('Geolocation is not supported.'));
        setLoading(false);
      }
    };

    getLocation();

    return () => {
      setLocation(null);
      setError(null);
      setLoading(true);
    };
  }, []);

  const getCurrentLocation = () => {
    setLoading(true);
    setLocation(null);
    setError(null);
    getLocation();
  };

  return { location, error, loading, getCurrentLocation };
};

export default useCurrentLocation;