import React, { Component, createContext } from 'react';
import { apiKeyWeather } from '../secret';

export const DriftContext = createContext();

class DriftContextProvider extends Component {
    state = {};

    async getWeatherData(cityName, stateCode, countryCode) {
        console.log('it ran in context api');
        const query = `api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateCode},${countryCode}&appid=${apiKeyWeather}&mode=json`;
        const query2 = `api.openweathermap.org/data/2.5/forecast?q=eagle,co,us&appid=b25ed8127b6a1baad76c30312b88d6a3`;

        await fetch(query2, {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded',
            // }
        })
        .then(response => {
            console.log('asdfadsf', response);
            return response.json();
        })
        .then(data => {
            console.log(data);
        })

    }
    render() {
        return (
            <DriftContext.Provider value={{
                ...this.state,
                getWeatherData: this.getWeatherData.bind(this)
            }}>
                {this.props.children}
            </DriftContext.Provider>
        )
    }
}

export default DriftContextProvider;