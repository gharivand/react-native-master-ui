import React from 'react';
import {Text, Image, StyleSheet, Dimensions, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const StarsRate = ({onPress, starSelected, starColor, starSize, starStyle, isRtl, isHeart}) => {
    const starArray = [1, 2, 3, 4, 5];
    return (
        <View style={[styles.containerStyle, isRtl ? {flexDirection: 'row-reverse'} : {}]}>
            {starArray.map(item => {
                return (
                    <TouchableOpacity
                        activeOpacity={onPress ? 0.8 : 1}
                        onPress={() => onPress ? onPress(item) : undefined}
                        style={[styles.starStyle, starStyle]}
                    >
                        <Icon name={starSelected >= item ? isHeart ? 'heart' : 'star' : isHeart ? 'heart-o' : 'star-o'}
                              size={starSize ? starSize : 14}
                              color={starColor ? starColor : '#ffb700'}/>
                    </TouchableOpacity>
                )
            })}
        </View>

    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
    },
    starStyle: {
        marginHorizontal: 2
    },
});

export {StarsRate};
