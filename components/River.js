import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import RiverView from './RiverView';
import {DriftContext} from '../contexts/DriftContext';

class River extends Component {
    static contextType = DriftContext;
    constructor(props) {
        super(props);
        this.state = {
            displayChart: false,
        }
    }

    displayRiverChart() {
        if (this.state.displayChart) {
            return <RiverView data={this.state.displayChart}/>
        }
    }

    async getWeatherData() {
        const weatherData = await this.context.getWeatherData('Eagle', 'CO', 'US');
        console.log('it ran', weatherData);
    }

    render() {
        const {name, flow, geo} = this.props.data;
        const { riverContainer, riverData, riverDataHeader, riverName, riverGeo, riverFlow, riverViewButton } = styles;
        return (
        <View style={riverContainer}>
            <TouchableOpacity style={riverData} onPress={() => {
                console.log('it worked', this.state.displayChart);
                this.getWeatherData();
                this.setState({displayChart: !this.state.displayChart})
                }}>
                <View style={riverDataHeader}>
                    <View>
                        <Text style={riverName}>{name}</Text>
                        <Text style={riverGeo}>{geo}</Text>
                    </View>
                    <Text style={riverFlow}>{flow} cfs</Text>
                </View>
            </TouchableOpacity>
            {this.displayRiverChart()}
        </View>
    );
        }
}

export default River;

const styles = {
    riverContainer: {
        width: '100%',
        minHeight: 60,
        marginBottom: 10,
        backgroundColor: '#3498db',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    riverData: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    riverDataHeader: {
        flexDirection: 'row',
        // height: ,
        width: '100%',
        justifyContent: 'space-between',
    },
    riverGeo: {
        color: '#fff',
    },
    riverName: {
        fontSize: 20,
        color: '#fff',
    },
    riverFlow: {
        fontSize: 15,
        color: '#fff',
    },
    viewRiverButton: {
        backgroundColor: '#2980b9',
    }
};