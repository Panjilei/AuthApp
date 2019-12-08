import React, {Component} from  'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card'

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

class CardSection extends Component {
    render() {
        return (
            <View style = {styles.containerStyle}>
                {this.props.children}
            </View>
        )
    };
};

export { CardSection };