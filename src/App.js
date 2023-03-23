import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
import Map from "./components/map/map";
import Navbar from './components/others/Navbar';
// import Header from './components/others/Header';
import Footer from './components/others/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Contact from "./Pages/Contact";
// import Home from '../Pages/Home';
// import Contact from '../Pages/Contact'
// import Projects from '../Pages/Projects'
// import { latlon } from "leaflet";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [latlon, setLatlon] = useState([])

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
        setLatlon([lat, lon]);
      })
      .catch(console.log);
  };

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<App />}/> */}
          {/* <Route path="/Projects" element={<Projects />}/> */}
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
        <div className="map">{forecast && <Map lat={latlon[0]} lng={latlon[1]} />}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
