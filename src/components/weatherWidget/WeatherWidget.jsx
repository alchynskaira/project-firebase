import React, { useEffect, useState } from "react";
import axios from "axios";
import AlertMessage from "../alert/AlertMessage";
import {API_KEY} from "../../config";
import './WeatherWidget.css'
import { useAlertContext } from "../../helpers/alertContextProvider";

const WeatherWidget =() => {
  const { showAlert } = useAlertContext();
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&'
  const urlLocation = `${baseUrl}&q=${location}&${API_KEY}`


  const savePositionToState = (position) => {
    fetchWeather(position.coords.latitude, position.coords.longitude);
  }

  const generateUrl = (latitude, longitude) => {
    return `${baseUrl}lat=${latitude}&lon=${longitude}&appId=${API_KEY}`
  }

  const handleGeolocation = () => {
    window.navigator.geolocation.getCurrentPosition(savePositionToState);
  }

  const searchLocation = async (e) => {
    try {
      if(e.key === 'Enter') {
        await  axios.get(urlLocation).then((res) => {
          setData(res.data);
        })
          setLocation('');
      }
    } catch (err){
          showAlert('error', 'Something went wrong, try again later!');
          console.log(err);
    }
  }

  const fetchWeather = async (lat, long) => {
    try {
     await  axios.get(generateUrl(lat, long)).then((res) => {
        setData(res.data);
      })

    } catch (err) {
        showAlert('error', 'Something went wrong, try again later!');
        console.log(err);
    }
  }

useEffect(()=> {
  handleGeolocation();
}, [])

  return (
    <div className="weather-container">
      <AlertMessage/>
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
       <h1>{data.main?.temp.toFixed()}°C</h1>

    </div>
    <div className="description">
      {data.hasOwnProperty("weather") && data.weather.length > 0 ?  <p>{data.weather[0].main}</p> : null}

    </div>
</div>

          <div className="bottom">
            <div className="feels about">
             <p className="bold">{data.main?.feels_like.toFixed()}°C</p>
              <p>Feels like</p>
            </div>
            <div className="humidity about">
               <p className="bold">{data.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind about">
              <p className="bold">{data.wind?.speed}m/s</p>
              <p>Wind Speed</p>
            </div>
          </div>

      </div>
    </div>
)


}
export default WeatherWidget;