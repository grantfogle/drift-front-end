import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const RiverForecast = ({}) => {
    // const {data} = data;
    // let labels = []

    const { forecast, day } = styles;
        return (
            <View style={forecast}>
                <View></View>
            </View>
        )
}

export default RiverForecast;

const styles = {
    forecast: {
        // minHeight: 400,
        width: '100%',
        flexDirection: 'column',
    },
    filterChartButtons: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
    },
    filterChartButton: {
        minWidth: 40,
        height: 20,
        backgroundColor: '#34495e',
        justifyContent: 'center',
        marginRight: 10,
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 4,
        justifyContent: 'center'
    },
    filterChartButtonText: {
        fontSize: 16,
        color: '#fff'
    }
}