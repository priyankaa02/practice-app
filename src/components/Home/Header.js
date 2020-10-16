import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';

export const Header = props => {
    return (
        <ImageBackground style={styles.header} source={require('../../images/adminBanner.png')} resizeMode="stretch">
           <View style={styles.headerItem}>
              <Icon name='home' color='white' size={30}/>
              <Text style={styles.headerTitle}>{props.title}</Text>
              <Icon name='notifications' color='white' size={30}/>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    header: {
        width: dimensions.width,
        height: responsive.vertical(130),
        paddingTop: 10,
        // backgroundColor: colors.btn_blue,
    },
    headerTitle: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Lobster',
    },
    headerItem: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
