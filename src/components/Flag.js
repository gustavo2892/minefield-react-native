import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Flag extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={[styles.flagPole, this.props.bigger ? styles.flagPoleBigger : null]}/>
                <View style={[styles.flag, this.props.bigger ? styles.flagBigger : null]}/>
                <View style={[styles.baseSmall, this.props.bigger ? styles.baseSmallBigger : null]}/>
                <View style={[styles.baseLarge, this.props.bigger ? styles.baseLargeBigger : null]}/>
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
    },
    flagPoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3
    },
    baseSmallBigger: {
        height: 4,
        width: 12,
        marginLeft: 12,
        marginTop: 20
    },
    baseLargeBigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24
    }
});