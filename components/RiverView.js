import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RiverFlowChart from './RiverFlowChart';

class RiverView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riverName: 'South Platte River',
            weeklyFlows: [220, 230, 240, 229, 220, 205, 200],
            monthlyFlow: [],
            yearlyFlow: [],
            medianWeeklyFlow: [200, 200, 205, 205, 200, 200, 195],
            medianMonthlyFlow: [],
            medianYearlyFlow: [],
            currentFlow: 200,
            sevenDayForecast: [],
            nearbyFlyShops: [{name: 'Trouts Fly Fishing', phoneNumber: '720-851-2342'}],
        }
    }

    render() {
        const { chartView } = styles;
        return (
            <View style={chartView}>
                <RiverFlowChart />
                <Text>asdf</Text>
            </View>
        );
    }
}

export default RiverView;

const styles = StyleSheet.create({
    chartView: {
        minHeight: 200,
        width: '100%',
        // backgroundColor: '#000'
    },
});