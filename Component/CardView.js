import React from 'react';
import {Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, View} from 'react-native';

const CardView = ({
                      onPress, style, isRtlAvatar, isRtlText, avatarImage, avatarImageStyle, avatarTitle,
                      avatarTitleStyle, imageStyle, image, resizeMode, titleStyle, title, contentStyle, content,
                      numberOfLines, children, isFlat
                  }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View style={[styles.buttonStyle, isFlat ? styles.isFlatView : styles.notFlatView,
                style]}>
                <View style={[styles.avatarContainer, isRtlAvatar ? {flexDirection: 'row-reverse'} : {}]}>
                    {avatarImage ?
                        <Image style={[styles.avatarImageStyle, avatarImageStyle]} source={avatarImage}/> : null}
                    {avatarTitle ?
                        <Text
                            style={[styles.avatarTitleStyle, avatarTitleStyle, isRtlAvatar ? {textAlign: 'right'} : {}]}>
                            {avatarTitle}
                        </Text> : null}
                </View>
                {image ?
                    <Image style={[styles.image, imageStyle]} source={image}
                           resizeMode={resizeMode ? resizeMode : 'cover'}/> : null}
                <View style={[styles.textContainer]}>
                    {title ?
                        <Text
                            style={[styles.titleStyle, titleStyle, isRtlText ? {textAlign: 'right'} : {}]}>{title}</Text>
                        : null
                    }
                    {content ?
                        <Text numberOfLines={numberOfLines}
                              style={[styles.contentStyle, contentStyle, isRtlText ? {textAlign: 'right'} : {}]}>{content}</Text>
                        : null
                    }
                </View>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 1,
        backgroundColor: '#fff',
        padding: 5,
        alignItems: 'center',
    },
    isFlatView: {
        width: Dimensions.get('screen').width,
        borderBottomWidth: 1,
        borderBottomColor: '#e4e4e4',
    },
    notFlatView: {
        width: Dimensions.get('screen').width - 10,
        marginTop: 5,
        marginHorizontal: 5,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    avatarImageStyle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#dfdfdf',
        marginBottom: 5
    },
    avatarTitleStyle: {
        fontSize: 12,
        color: '#7a7a7a',
        marginHorizontal: 5,
        marginBottom: 5
    },
    image: {
        width: '100%',
        height: Dimensions.get('screen').width - 20,
        borderRadius: 2,
        backgroundColor: '#dfdfdf',
    },
    textContainer: {
        width: '100%',
    },
    titleStyle: {
        fontSize: 15,
        color: '#404040',
        marginTop: 5
    },
    contentStyle: {
        fontSize: 12,
        color: '#8c8c8c',
        marginTop: 2
    },
});

export {CardView};
