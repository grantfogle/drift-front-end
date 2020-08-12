import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { filterContainer, filterSearch, filterSearchTextInput } = styles;
        return (
            <View style={filterContainer}>
                {/* <SearchBar /> */}
                <View style={filterSearch}>
                    {/* add search icon */}
                    <TextInput style={filterSearchTextInput} placeholder='Search River, State, or Region'/>
                </View>
                <View>
                    {/* dropdown for state */}
                    {/* filter by state */}
                    {/* filter by region */}
                    {/* dropdown for region */}
                </View>
            </View>
        );
    }
}

export default Filter;

const styles = StyleSheet.create({
    filterContainer: {
        width: '100%',
        minHeight: 40,
        // paddingLeft: 10,
        // paddingRight: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterSearch: {
        height: 40,
        width: '90%',
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        borderRadius: 10,
    },
    filterSearchTextInput: {
        fontSize: 20,
        width:'100%',
        paddingLeft: 10,
    }
});