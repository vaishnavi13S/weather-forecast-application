import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import './index.css'


const WeatherPage = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  
  const [iconId, setIconId] = useState(null);

  const fetchWeather = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3011a5fe893feb91cbc9eda45718f06&units=metric`
      );
      console.log("api data", res.data)
      setWeather(res.data);
      setIconId(res.data.weather[0].icon)

    } catch (error) {
      setError("Error fetching weather data");
      console.error(error);
    }
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]); // Now, fetchWeather is a stable reference due to useCallback

  if (error) return <p>{error}</p>;

  

  return (
    <div className="container mx-auto p-4">
        <h1 className="weather-report">Weather Report</h1>
      {weather ? (
        <div className='weather-details-container'>
            <div className="arrow">
                <Link to="/">
                <img src="https://cdn-icons-png.flaticon.com/128/5720/5720446.png" alt="back arrow" className='back-button'/>
            </Link>
            </div>
            <div className='weather'>
            <img src={`https://openweathermap.org/img/wn/${iconId}@2x.png`} className="weather-icon" alt="weather icon"/>
            <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
            <h2 className="Description">{weather.weather[0].description}</h2>
          <h2 className="text-4xl">{weather.name}</h2>

          
                <div className="details">
                    <div className="col">
                        <img src="https://cdn-icons-png.flaticon.com/128/5664/5664996.png" alt="humidity"/>
                        <div>
                            <p className="humidity">{weather.main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src="https://cdn-icons-png.flaticon.com/128/6227/6227801.png" alt="wind"/>
                        <div>
                            <p className="wind">
                                {weather.wind.speed} km/h
                            </p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
      
    </div>
  );
};

export default WeatherPage;