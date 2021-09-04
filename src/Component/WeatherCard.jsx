import React , {useEffect} from 'react'
import "./style.css"

const WeatherCard = ({ tempInfo }) => {
    const [weatherState, setweatherState] = React.useState("") ;
    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(() => {
        if(weatherMood){
            switch (weatherMood) {
                case 'Clouds': setweatherState('wi-day-cloudy');
                    break;
                case 'Haze': setweatherState('wi-fog');
                    break;
                case 'Clear': setweatherState('wi-day-sunny');
                    break;
                case 'Mist': setweatherState('wi-dust');
                    break;
                case 'Rain': setweatherState('wi-day-rain');
                    break;
            
                default:
                    setweatherState('wi-day-sunny');
                    break;
            }
        }
    }, [weatherMood])

    let today = new Date();
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    let timeStr1 = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    let sec = sunset;
    let date2 = new Date(sec * 1000);
    let timeStr = `${date2.getHours()}:${date2.getMinutes()}`;
    return (
        <div className="card">
            <div className="card-lyt">
                <div className="icon-box">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="tandt">
                    <div className="temperature">
                        <h1>{temp}&#176;</h1>
                        <div>
                            <span className="mood">
                                {weatherMood}
                            </span>
                            <span className="city">{name}, {country}</span>
                        </div>
                    </div>
                    <div className="time">
                        <h2>
                            {date}
                        <br/>
                        {timeStr1}
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <i className="wi wi-sunset"></i>
                        <div>
                            <span>{timeStr}PM</span>
                            <span>Sunset</span>
                        </div>
                    </div>
                    <div className="col">
                        <i className="wi wi-humidity"></i>
                        <div>
                            <span>{humidity}</span>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <i className="wi wi-rain"></i>
                        <div>
                            <span>{pressure}</span>
                            <span>Pressure</span>
                        </div>
                    </div>
                    <div className="col">
                        <i className="wi wi-strong-wind"></i>
                        <div>
                            <span>{speed}</span>
                            <span>Speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherCard

