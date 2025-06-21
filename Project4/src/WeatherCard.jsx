import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="card mx-auto" style={{ maxWidth: 400 }}>
      <div className="card-body">
        <h4 className="card-title">{data.name}, {data.sys.country}</h4>
        <h5 className="card-subtitle mb-2 text-muted">{data.weather[0].main}</h5>
        <p className="card-text">
          🌡️ Temp: {data.main.temp} °C<br />
          💧 Humidity: {data.main.humidity}%<br />
          💨 Wind Speed: {data.wind.speed} m/s
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
