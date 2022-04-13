import React, {useState} from "react";
import axios from "axios";
import './WeatherWidget.css'

const CurrentWeather = () => {





  const fetchWeather = async () => {
  try{
     await axios.get(url).then((res) => {
      setCurrentData(res.data);
      console.log(res.data);
  })
    setCurrentLocation('');
  }catch (err) {
    console.log(err);
}

  }


//   return (
//     <div className="weather-container">
//       <div className="head-box" >
//         <input type="text" placeholder="Enter location"
//                value={location}
//                onChange={e => setLocation(e.target.value)}
//                onKeyPress={searchLocation}
//         />
//         <button className="current-location-btn">Current weather</button>
//       </div>
//       <div className="weather-box">
//         <div className="top">
//           <div className="location">
//             <p>{data.name}</p>
//           </div>
//           <div className="temp">
//             {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
//
//           </div>
//           <div className="description">
//             {data.weather ?  <p>{data.weather[0].main}</p> : null}
//
//           </div>
//         </div>
//         {data.name != undefined &&
//           <div className="bottom">
//             <div className="feels about">
//               {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
//               <p>Feels like</p>
//             </div>
//             <div className="humidity about">
//               {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
//               <p>Humidity</p>
//             </div>
//             <div className="wind about">
//               {data.wind ? <p className="bold">{data.wind.speed}m/s</p> : null}
//               <p>Wind Speed</p>
//             </div>
//           </div>
//
//         }
//
//       </div>
//     </div>
//   )
//
//
// }
// export default CurrentWeather;