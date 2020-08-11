import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import River from './River';

class Rivers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rivers: [
                {
                    name: "South Platte River", river:'South Platte', 
                    geo: 'Deckers', state: 'CO', region: 'Front Range', flow: 141, gis: '1243143'
                },
                {
                    name: "South Platte River", river:'South Platte', 
                    geo: 'Eleven Mile Canyon', state: 'CO', region: 'Front Range', flow: 241, gis: '1243143'
                },
                {
                    name: "Eagle River", river:'Eagle', geo: 'Dotsero',
                    state: 'CO', region: 'Central Colorado', flow: 369, gis: '1243143'
                },
                {
                    name: "Eagle River", river:'Eagle', geo: 'Eagle',
                    state: 'CO', region: 'Central Colorado', flow: 369, gis: '1243143'
                },
                {
                    name: "Roaring Fork River", river: 'Roaring Fork', geo: 'Aspen',
                    state: 'CO', region: 'Central Colorado', flow: 449, gis: '1243143'
                },
                {
                    name: "Roaring Fork River", river: 'Roaring Fork', geo: 'Glenwood Springs',
                    state: 'CO', region: 'Central Colorado', flow: 800, gis: '1243143'
                },
                {
                    name: "Arkansas River", river: 'Arkansas', geo: 'Salida',
                    state: 'CO', region: 'Central Colorado', flow: 1200, gis: '1243143'
                },
                {
                    name: "Arkansas River", river: 'Arkansas', geo: 'Buena Vista',
                    state: 'CO', region: 'Central Colorado', flow: 600, gis: '1243143'
                },
                {
                    name: "Animas River", river: 'Animas', geo: 'Durango',
                    state: 'CO', region: 'Central Colorado', flow: 1200, gis: '1243143'
                },
                {
                    name: "Rio Conejos", river: 'Rio Conejos', geo: 'Pagosa Springs',
                    state: 'CO', region: 'Central Colorado', flow: 200, gis: '1243143'
                },
            ]
        }
    }

    // get context for river flow info
    // get context for river gps data
    // get context for user

    displayRivers() {
        return this.state.rivers.map(river => <River id={river.gis} data={river} />);
    }

    render() {
        const { riversScrollView, riversFilter, riversFilterText,  textStyle } = styles;
        return (
            <ScrollView style={riversScrollView}>
                <View style={riversFilter}>
                    <Text style={riversFilterText}>River</Text>
                    <Text style={riversFilterText}>Current Flows</Text>
                </View>
                {this.displayRivers()}
                <Text style={textStyle}>asdfasdf</Text>
            </ScrollView>
        );
    }
}

export default Rivers;

const styles = StyleSheet.create({
    riversScrollView: {
        width: '100%',
        padding: 20,
    },
    riversFilter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        marginBottom: 10,
    },
    riversFilterText: {
        height: 30,
        fontSize: 20,

    },
    textStyle: {
        fontSize: 25,
        color: '#dfdfdf'
    }
});