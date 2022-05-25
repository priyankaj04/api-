import React from 'react';
import apiKeys from './apikey';
import './weather.css';

class Weather extends React.Component {
        state = {
                lat: undefined,
                lon: undefined,
                errorMessage: undefined,
                temperatureC: undefined,
                city: undefined,
                country: undefined,
                description: undefined,
                icon: "CLEAR_DAY",
                sunrise: undefined,
                sunset: undefined,
                errorMsg: undefined,
        };

        componentDidMount() {
                if (navigator.geolocation) {
                        this.getPosition()
                                //If user allow location service then will fetch data & send it to get-weather function.
                                .then((position) => {
                                        this.getWeather(position.coords.latitude, position.coords.longitude);
                                })
                                .catch((err) => {
                                        //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
                                        this.getWeather(28.67, 77.22);
                                        alert(
                                                "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
                                        );
                                });
                } else {
                        alert("Geolocation not available");
                }

                this.timerID = setInterval(
                        () => this.getWeather(this.state.lat, this.state.lon),
                        600000
                );
        }


        componentWillUnmount() {
                clearInterval(this.timerID);
        }

        getPosition = (options) => {
                return new Promise(function (resolve, reject) {
                        navigator.geolocation.getCurrentPosition(resolve, reject, options);
                });
        };

        getWeather = async (lat, lon) => {
                const api_call = await fetch(`${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKeys.key}`);

                const data = await api_call.json();

                this.setState({
                        lat: lat,
                        lon: lon,
                        city: data.name,
                        temperatureC: Math.round(data.main.temp),
                        main: data.weather[0].description,
                        country: data.sys.country,
                });
        }
        render() {
                if (this.state.temperatureC) {
                        return (
                                <>
                                        <div className="city">
                                                <div className="mb-icon">
                                                        <p>{this.state.main}</p>
                                                </div>
                                                <div className="temperature">
                                                        <p>{this.state.temperatureC}°<span>C</span></p>
                                                </div>
                                        </div>
                                </>
                        );
                } else {
                        return (
                                <>
                                        <div className="loading">
                                                loading...
                                        </div>
                                </>
                        );
                }
        }
}

export default Weather;