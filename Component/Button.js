import React from 'react';
import {Text, ActivityIndicator, StyleSheet, Platform, TouchableOpacity} from 'react-native';

const Button = ({onPress, title, isLoading, disable, style, textStyle, indicatorColor, status, isLinear}) => {
    return (
        <TouchableOpacity
            activeOpacity={disable ? 1 : 0.7}
            onPress={disable || isLoading ? undefined : onPress}
            style={[styles.buttonStyle, {
                backgroundColor: isLinear ? colorPicker(status).opacityColor : colorPicker(status).color,
                borderColor: colorPicker(status).color
            }, style]}
        >
            {isLoading ?
                <ActivityIndicator
                    color={indicatorColor ? indicatorColor :
                        isLinear ? colorPicker(status).textColor : '#fff'} size={'small'}/>
                :
                <Text style={[styles.textStyle, {
                    color: isLinear ? colorPicker(status).textColor : '#fff',
                }, textStyle]}>{title}</Text>
            }
        </TouchableOpacity>
    );
};

function colorPicker(status) {
    switch (status) {
        case 'info':
            return {color: '#4286F5', opacityColor: 'rgba(66,134,245,0.3)', textColor: '#3b72d9',};
        case 'info2':
            return {color: '#A21096', opacityColor: 'rgba(162,16,150,0.3)', textColor: '#9a108e'};
        case 'success':
            return {color: '#2EC545', opacityColor: 'rgba(46,197,69,0.3)', textColor: '#2eb544'};
        case 'warning':
            return {color: '#FFB700', opacityColor: 'rgba(255,183,0,0.3)', textColor: '#c68800'};
        case 'danger':
            return {color: '#FF002E', opacityColor: 'rgba(255,0,46,0.3)', textColor: '#dd002c'};
        case 'aqua':
            return {color: '#00bcd4', opacityColor: 'rgba(0,188,212,0.3)', textColor: '#0295a7'};
        default :
            return {color: '#A3A3A3', opacityColor: 'rgba(163,163,163,0.3)', textColor: '#666666'};
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 38,
        minWidth: 80,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 14,
        marginBottom: Platform.OS === 'ios' ? -3 : 0,
        marginHorizontal: 10
    },
});

export {Button};
