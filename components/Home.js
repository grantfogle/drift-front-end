import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Rivers from './Rivers';

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
                {/* <Search /> */}
                <Rivers />
                <Text style={textStyle}>asdfasdf</Text>
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
        // backgroundColor: 'purple',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textStyle: {
        fontSize: 25,
        color: '#dfdfdf'
    }
});