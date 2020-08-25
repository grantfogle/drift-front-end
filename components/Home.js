import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Rivers from './Rivers';
import Filter from './Filter';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { container, textStyle } = styles;
        return (
            <View style={container}>
                {/* <Navigation/> */}
                {/* <Filter /> will allow users to filter by region, state*/}
                <Filter />
                {/* <Search /> */}
                <Button title="View Maps" onPress={() => Actions.riverMap()}></Button>
                <Rivers />
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 80,
    },
    textStyle: {
        fontSize: 25,
        color: '#dfdfdf'
    }
});