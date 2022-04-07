import React, {useState} from "react";
import axios from "axios";
import './WeatherWidget.css'

const WeatherWidget =() => {
    //const url  = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&q={city name}&appid=b5a96753573b7cb6a06406d22c88b980`
return (
    <div className="weather-container">
<div className="top">
   <div className="location">
       <p>London</p>
   </div>
    <div className="temp">
        <h1>60 F</h1>
    </div>
    <div className="description">
        <p>Clouds</p>
    </div>
</div>
        <div className="bottom">
            <div className="humidity">
                <p>20%</p>
            </div>
            <div className="wind">
                <p>12 MPH</p>
            </div>
        </div>
    </div>
)


}
export default WeatherWidget;