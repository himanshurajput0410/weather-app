import React, { useEffect, useState } from "react";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import humidity_icom from "../assets/humidity.png";

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Indore");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9b4a1ce09f9d66c6b14f77dd3d5a0a9e`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <section className="w-full py-8">
        <div className="container mx-auto lg:max-w-screen-lg px-4 ">
          <div className="bg-weather-app max-w-3xl mx-auto rounded-2xl px-10 py-20">
            <div className="flex justify-center items-center w-full">
              <input
                type="search"
                className="CityInput flex w-[380px] py-3 px-3 text-xl placeholder:text-gray-950 text-gray-950 rounded-lg bg-slate-200 border-none outline-none"
                placeholder="Search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            {!city ? (
              <p className="text-center text-xl text-white mt-5">
                No data found
              </p>
            ) : (
              <div>
                <div className="mt-6 flex justify-center ">
                  <img src={cloud_icon} alt="cloud icon" />
                </div>
                <div className="flex justify-center items-center capitalize gap-x-4 text-white text-6xl font-medium">
                  {search}
                  <span className="text-white  text-5xl mt-4  font-medium">
                    {city.temp}°C
                  </span>
                </div>
                <div className="mt-10 text-white flex justify-center ">
                  <div className="m-auto flex item-start gap-3">
                    <img className="mt-2" src={humidity_icom} alt="Humidity" />
                    <div className="text-3xl font-medium ">
                      <div className="mb-2"> {city.humidity}%</div>
                      <div className="text-xl font-medium">Humidity</div>
                    </div>
                  </div>
                  <div className="m-auto flex item-start gap-3">
                    <div className="text-3xl font-medium ">
                      <div className="mb-2">
                        Min Temperature
                        <span className="ml-2">{city.temp_min}</span>
                      </div>
                      <div>
                        Max Temperature
                        <span className="ml-2">{city.temp_max}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default WeatherApp;
