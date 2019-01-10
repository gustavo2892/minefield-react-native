import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';

export default class LevelSelection extends Component {
    render () {
        return (
            <Modal 
                onRequestClose={this.props.onCancel}
                visible={this.props.isVisible}
                animationType='slide'
                transparent={true}
            >
                <View style={styles.frame}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Selecione o Nível</Text>
                        <TouchableOpacity 
                            style={[styles.button, styles.bgEasy]}
                            onPress={() => this.props.onLevelSelected(0.1)}
                        >
                            <Text style={styles.buttonLabel}>
                                Easy
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.button, styles.bgNormal]}
                            onPress={() => this.props.onLevelSelected(0.2)}
                        >
                            <Text style={styles.buttonLabel}>
                                Normal
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.button, styles.bgHard]}
                            onPress={() => this.props.onLevelSelected(0.3)}
                        >
                            <Text style={styles.buttonLabel}>
                                Hard
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    };
};

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765f7'
    },
    bgHard: {
        backgroundColor: '#f26337'
    }
});