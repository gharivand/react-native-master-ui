import React from 'react';
import {Text, Image, StyleSheet, Dimensions, TouchableNativeFeedback, View} from 'react-native';

const ListItem = ({onPress, style, imageStyle, image, titleStyle, title, contentStyle, content, isRtl, numberOfLines, isCard}) => {
    return (
        <TouchableNativeFeedback
            onPress={onPress}
        >
            <View style={[styles.containerStyle, isCard ? styles.isCardView : styles.notCardView,
                style, isRtl ? {flexDirection: 'row-reverse'} : {}]}>
                <Image style={[styles.image, imageStyle]} source={image}/>
                <View>
                    {title ?
                        <Text style={[styles.titleStyle, titleStyle, isRtl ? {textAlign: 'right'} : {}]}>{title}</Text>
                        : null
                    }
                    {content ?
                        <Text numberOfLines={numberOfLines}
                              style={[styles.contentStyle, contentStyle, isRtl ? {textAlign: 'right'} : {}]}>{content}</Text>
                        : null
                    }
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 5,
        paddingVertical: 5,
        alignItems: 'center',
    },
    isCardView: {
        width: Dimensions.get('screen').width - 10,
        marginTop: 5,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    notCardView: {
        width: Dimensions.get('screen').width,
        borderBottomWidth: 1,
        borderBottomColor: '#e4e4e4',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#dfdfdf',
        marginHorizontal: 5
    },
    titleStyle: {
        fontSize: 14,
        color: '#404040',
        marginHorizontal: 5,
        width: Dimensions.get('screen').width - 90,
    },
    contentStyle: {
        fontSize: 12,
        color: '#8c8c8c',
        marginHorizontal: 5,
        width: Dimensions.get('screen').width - 90,
    },
});

export {ListItem};
