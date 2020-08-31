import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { Polygon, Marker } from 'react-native-maps';

// import RiverView from './RiverView';
import {DriftContext} from '../../contexts/DriftContext';

class RiverMap extends Component {
    static contextType = DriftContext;
    constructor(props) {
        super(props);
        this.state = {
            fishableWater: {},
            parkingSpaces: {},
            polygon: [{latitude: 39.257968, longitude: -105.229786},{latitude: 39.252219, longitude: -105.219401}, {latitude: 39.272840, longitude: -105.211611}, {latitude: 39.274784, longitude:-105.220688}],
            marker: {latitude: 39.254324, longitude: -105.226802}
        }
    }

    // displayFishableWater() {}
    // displayParking(){}
    // displayRestrooms(){}
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
                mapType="standard"
            >
        <Polygon
            coordinates={this.state.polygon} 
            strokeColor="rgba(39, 174, 96, 1.0)"
            strokeWidth={2}
            fillColor="rgba(46, 204, 113, .5)"
            />
        <Marker 
            title="Flies and Lies"
            description="(720) 859-9390"
            coordinate={this.state.marker}
            pinColor="rgba(142, 68, 173,1.0)"/>
        </MapView>
        {/* <Footer/> */}
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