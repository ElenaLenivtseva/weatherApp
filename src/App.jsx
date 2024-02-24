import { useEffect, useState } from "react";
import "./App.css";
import Highlights from "./components/Highlights";
import Temperature from "./components/Temperature";

function App() {
  const [city, setCity] = useState("New Delphi");
  const [weatherData, setWeatherData] = useState(null);
  useEffect(
    (apiUrl) => {
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("error");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setWeatherData(data);
        })
        .catch((e) => console.log(e));
    },
    [city]
  );

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=59b6495858034637afd60555242402&q=${city}&aqi=no`;

  return (
    <div className="bg-[#1F213A] h-screen flex justify-center align-top">
      <div className="mt-40 w-1/5 h-1/3">
        <Temperature setCity={setCity}/>
      </div>

      <div className="mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6 ">
        <h2 className="text-slate-200 text-2xl col-span-2">
          Today's Highlights
        </h2>
        <Highlights />
        <Highlights />
        <Highlights />
        <Highlights />
      </div>
    </div>
  );
}

export default App;
