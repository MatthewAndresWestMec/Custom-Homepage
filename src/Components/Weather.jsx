// Weather.jsx

import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Get user's geolocation
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            // Make API request with geolocation data
            const apiUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`;
            const response = await fetch(apiUrl, {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key':
                  '3ce699255emsh5917ed94f1ec752p1ac410jsneac84a4daee6',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
              },
            });

            const data = await response.json();
            setWeatherData(data);
            setLoading(false);
          },
          (error) => {
            console.error('Error getting geolocation:', error);
            setError(
              'Error getting geolocation. Please allow location access.'
            );
            setLoading(false);
          }
        );
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data.');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h2>Weather</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && weatherData.location && (
        <div>
          <p>{weatherData.location.name}</p>
          <p>{weatherData.current.temp_f}°F</p>
          <p>{weatherData.current.condition.text} Outside</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
