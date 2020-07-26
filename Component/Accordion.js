import React, {useState} from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Accordion = ({headerStyle, isRtl, iconColor, title, titleStyle, containerStyle, children, isCard}) => {
    const [show, setShow] = useState(false);
    return (
        <View style={[styles.containerStyle, isCard ? styles.isCardView : styles.notCardView,
            containerStyle, isRtl ? {alignItems: 'flex-end'} : {}, show ? {} : {minHeight: 40}]}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setShow(!show)}
                style={[styles.headerStyle, isCard ? styles.shadow : {}, headerStyle,
                    isRtl ? {flexDirection: 'row-reverse'} : {}]}
            >
                <Text style={[styles.titleStyle, titleStyle, isRtl ? {textAlign: 'right'} : {}]}>{title}</Text>
                <Icon color={iconColor ? iconColor : '#404040'} size={18}
                      name={show ? 'chevron-up' : 'chevron-down'}/>
            </TouchableOpacity>
            {show ? children : null}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 1,
        minHeight: 120,
    },
    isCardView: {
        width: Dimensions.get('screen').width - 10,
        marginHorizontal: 5,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1
    },
    shadow: {
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1
    },
    notCardView: {
        width: '100%',
        backgroundColor: '#f3f3f3',
        borderColor: '#e4e4e4',
        borderWidth: 1
    },
    headerStyle: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    titleStyle: {
        fontSize: 14,
        color: '#404040',
    },
});

export {Accordion};
