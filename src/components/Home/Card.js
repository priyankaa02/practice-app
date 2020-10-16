import React from 'react';
import { StyleSheet, View } from 'react-native';


export const MyCard = props => {
    return <View style= { {...styles.card , ...props.style} } >{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width:0, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 10,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 1,
    }
});
