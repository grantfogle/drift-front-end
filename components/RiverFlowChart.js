import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const RiverFlowChart = ({}) => {
    // const {data} = data;
    // let labels = [];
    const { chart, filterChartButtons, filterChartButton, filterChartButtonText } = styles;
        return (
            <View style={chart}>
                <LineChart
                        data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                            }
                        ]
                        }}
                        width={360} // from react-native
                        height={200}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16
                        }}
                    />
                <View style={filterChartButtons}>
                    <TouchableHighlight style={filterChartButton}>
                        <Text style={filterChartButtonText}>Weekly</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={filterChartButton}>
                        <Text style={filterChartButtonText}>Monthly</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={filterChartButton}>
                        <Text style={filterChartButtonText}>Yearly</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
}

export default RiverFlowChart;

const styles = {
    chart: {
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