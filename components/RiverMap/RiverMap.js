import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
// import RiverView from './RiverView';
import {DriftContext} from '../../contexts/DriftContext';

class RiverMap extends Component {
    static contextType = DriftContext;
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // async getWeatherData() {
    //     const weatherData = await this.context.getWeatherData('eagle', 'co', 'us');
    //     console.log('it ran', weatherData);
    // }

    render() {
        // const {name, flow, geo} = this.props.data;
        const { mapContainer, map } = styles;
        return (
        <View style={mapContainer}>
            {/* <MapView></MapView> */}
            <MapView
                style={map}
                initialRegion={{
                latitude: 39.2547,
                longitude: -105.2269,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
        </View>
    );
        }
}

export default RiverMap;

const styles = {
    mapContainer: {
        width: '100%',
        height: '100%'
    },
    map: {
        height: '100%',
        width: '100%',
    }
};