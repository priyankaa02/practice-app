import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import {dimensions, colors} from '../../styles/variables';
import {responsive} from '../../styles/mixins';

export const Header = props => {
    return (
        <View style={styles.header}>
           <View style={styles.headerItem}>
               <TouchableOpacity activeOpacity={0.8} onPress={props.onClickHome}>
                 <Icon name='home' color='white' size={25}/>
               </TouchableOpacity>
              <Text style={styles.headerTitle}>{props.title}</Text>
              <Icon name='notifications' color='white' size={25}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: dimensions.width,
        height: responsive.vertical(90),
        paddingTop: 15,
        backgroundColor: colors.btn_blue,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 5},
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 10,
    },
    headerTitle: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'OpenSans-Bold',
    },
    headerItem: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
