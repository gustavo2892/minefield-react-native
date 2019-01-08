import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Flag extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.flagPole}/>
                <View style={styles.flag}/>
                <View style={styles.baseSmall}/>
                <View style={styles.baseLarge}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2
    },
    flagPole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#f22',
        marginLeft: 3
    },
    baseSmall: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10
    },
    baseLarge: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    }
});