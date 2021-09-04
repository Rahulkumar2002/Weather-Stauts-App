// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=6d681232e6c9558262dcc43dd05a95af

import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import './style.css'


function Temp() {
    const [searchValue, setsearchValue] = useState("Delhi")
    const [tempInfo, settempInfo] = useState({})

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6d681232e6c9558262dcc43dd05a95af`
            const res = await fetch(url)
            const data = await res.json()

            const { temp, humidity, pressure } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset,
            }
            settempInfo(myNewWeatherInfo)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, [])


    return (
        <div className='temp-main'>

            <div className="searchBox">
                <input type="search" className="searchInput" autoFocus
                    placeholder="Check Your City Weather..."
                    value={searchValue}
                    onChange={(e) => setsearchValue(e.target.value)} />

                <button className="btn" onClick={getWeatherInfo}>
                    Search
                </button>
            </div>
            <WeatherCard tempInfo = {tempInfo} />
        </div>
    )
}

export default Temp

