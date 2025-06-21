import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "6d52164c59c33ed19cc500a3280a52a0"; // Replace with your OpenWeatherMap API key

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
        setError('');
      } else {
        setError('City not found!');
        setWeather(null);
      }
    } catch {
      setError('Error fetching data.');
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">🌤️ Weather App</h2>
      <div className="input-group mb-3 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchWeather}>
          Search
        </button>
      </div>
      {error && <p className="text-danger">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;
