import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 35,
        height: 50,
        width: 100,
        flex: 2,
    },
    containerStyle: {
        height: 50,
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    }
}

const { labelStyle, inputStyle, containerStyle } = styles;

const Input = ({ label, placeholder }) => {
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
            />
        </View>
    );
};

export { Input };