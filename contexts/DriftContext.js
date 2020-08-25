import React, { Component, createContext } from 'react';
import { apiKeyWeather } from '../secret';

export const DriftContext = createContext();

class DriftContextProvider extends Component {
    state = {};

    // async getWeatherData(cityName, stateCode, countryCode) {
    //     console.log('it ran in context api');
    //     console.log(cityName, stateCode, countryCode);
    //     let cors = 'https://cors-anywhere.herokuapp.com/';
    //     let query = `api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateCode},${countryCode}&appid=${apiKeyWeather}&mode=xml`;
    //     console.log(`${cors}${query}`);
    //     await fetch(`${cors}${query}`, {
    //         method: 'GET',
    //         // headers: {
    //         //     'Content-Type': 'application/json',
    //           // 'Accept': 'application/json',
    //         // },
    //     })
    //         .then(response => response)
    //         .then(data => {
    //             console.log('dataaaa', data);
    //             return data;
    //         })

    // }

    render() {
        return (
            <DriftContext.Provider value={{
                ...this.state,
                // getWeatherData: this.getWeatherData.bind(this)
            }}>
                {this.props.children}
            </DriftContext.Provider>
        )
    }
}

export default DriftContextProvider;