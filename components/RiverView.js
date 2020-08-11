import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

class RiverView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riverName: {},
            weeklyFlows: [["", ]],
            monthlyFlow: [],
            yearlyFlow: [],
            medianWeeklyFlow: [],
            medianMonthlyFlow: [],
            medianYearlyFlow: [],
            currentFlow: [],
            sevenDayForecast: [],
            nearbyFlyShops: [{name: 'Trouts Fly Fishing', phoneNumber: '720-851-2342'}],
        }
    }

    render() {
        const { chartView } = styles;
        return (
            <View></View>
        );
    }
}

export default RiverView;

const styles = StyleSheet.create({
    chartView: {
        
    }
});