import React, { useState } from 'react';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';
import './Demos.css';

const WeatherDemo = () => {
    const [city, setCity] = useState('Seoul');

    // Mock data for demo purposes
    const weatherData = {
        Seoul: { temp: 24, condition: 'Sunny', hum: 45, wind: 12 },
        London: { temp: 15, condition: 'Rainy', hum: 82, wind: 18 },
        NewYork: { temp: 20, condition: 'Cloudy', hum: 60, wind: 15 }
    };

    const current = weatherData[city.replace(/\s/g, '')] || weatherData.Seoul;

    return (
        <div className="demo-container weather-bg">
            <div className="demo-header">
                <h3>날씨 시각화</h3>
                <p>전 세계 실시간 기상 데이터 확인</p>
            </div>

            <div className="weather-widget">
                <div className="city-tabs">
                    {Object.keys(weatherData).map(c => (
                        <button key={c} onClick={() => setCity(c)} className={city === c ? 'active' : ''}>
                            {c}
                        </button>
                    ))}
                </div>

                <div className="weather-display">
                    <div className="weather-main">
                        {current.condition === 'Sunny' && <Sun size={64} className="sun-icon" />}
                        {current.condition === 'Rainy' && <CloudRain size={64} className="rain-icon" />}
                        {current.condition === 'Cloudy' && <Cloud size={64} className="cloud-icon" />}
                        <span className="temp">{current.temp}°C</span>
                    </div>

                    <div className="weather-details">
                        <div className="detail-item">
                            <Cloud size={20} />
                            <span>{current.condition}</span>
                        </div>
                        <div className="detail-item">
                            <Wind size={20} />
                            <span>{current.wind} km/h</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDemo;
