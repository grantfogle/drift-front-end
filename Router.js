import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
// import { StyleSheet } from 'react-native';
// import Login from './components/login/Login';
import Home from './components/Home';
import RiverMap from './components/RiverMap/RiverMap';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="home" hideNavBar={true} component={Home} title="Home" initial />
                <Scene key="riverMap" component={RiverMap} title="South Platte River" />
            </Stack>
        </Router>
    )
}

export default RouterComponent;