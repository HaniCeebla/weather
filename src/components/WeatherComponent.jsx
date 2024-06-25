// WeatherComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch weather data when the city changes
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`);
        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setWeatherData(null);
        setError('Error fetching weather data. Please try again.');
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter city" value={city} onChange={handleInputChange} />
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          {/* Add more weather details as needed */}
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default WeatherComponent;
