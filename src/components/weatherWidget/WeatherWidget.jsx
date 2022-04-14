import React, { useEffect, useState } from "react";
import axios from "axios";
import './WeatherWidget.css'

const WeatherWidget =() => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
  const appId = 'units=metric&appid=b5a96753573b7cb6a06406d22c88b980'
  const urlLocation = `${baseUrl}&q=${location}&${appId}`


  const savePositionToState = (position) => {
    fetchWeather(position.coords.latitude, position.coords.longitude);
  }

  const generateUrl = (latitude, longitude) => {
    return `${baseUrl}lat=${latitude}&lon=${longitude}&${appId}`
  }

  const handleGeolocation = () => {
    window.navigator.geolocation.getCurrentPosition(savePositionToState);
  }

  const searchLocation = async (e) => {
    try {
      if(e.key === 'Enter') {
        await  axios.get(urlLocation).then((res) => {
          setData(res.data);
          console.log(res.data);
        })
          setLocation('');
      }
    } catch (err){
          console.log(err);
    }
  }

  const fetchWeather = (lat, long) => {
    try {
       axios.get(generateUrl(lat, long)).then((res) => {
        setData(res.data);
      })

    } catch (err) {
        console.log(err);
    }
  }

useEffect(()=> {
  handleGeolocation();

}, [])

  return (
    <div className="weather-container">
      <div className="head-box" >
      <input type="text" placeholder="Enter location"
             value={location}
             onChange={e => setLocation(e.target.value)}
               onKeyPress={searchLocation}
      />
        <button className="current-location-btn" onClick={handleGeolocation}>Current weather</button>
      </div>
      <div className="weather-box">
<div className="top">
   <div className="location">
       <p>{data.name}</p>
   </div>
    <div className="temp">
      {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}

    </div>
    <div className="description">
      {data.weather ?  <p>{data.weather[0].main}</p> : null}

    </div>
</div>
        {data.name != undefined &&
          <div className="bottom">
            <div className="feels about">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels like</p>
            </div>
            <div className="humidity about">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind about">
              {data.wind ? <p className="bold">{data.wind.speed}m/s</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>

        }

      </div>
    </div>
)


}
export default WeatherWidget;