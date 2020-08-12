import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import RiverView from './RiverView';

const River = ({data}) => {
    // const {river, flow}
    const {name, flow, geo} = data;
    const { riverContainer, riverData, riverName, riverGeo, riverFlow, riverViewButton } = styles;
    let displayChart = true;
    return (
        <View style={riverContainer}>
            <TouchableOpacity style={riverData}>
                    <View>
                        <Text style={riverName}>{name}</Text>
                        <Text style={riverGeo}>{geo}</Text>
                    </View>
                <Text style={riverFlow}>{flow} cfs</Text>
                <RiverView/>
            </TouchableOpacity>
        </View>
    );
}

export default River;

const styles = {
    riverContainer: {
        width: '100%',
        minHeight: 60,
        marginBottom: 10,
    },
    riverData: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        backgroundColor: '#3498db',
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
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