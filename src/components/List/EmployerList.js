import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { dimensions, randomColors, colors } from '../../styles/variables';
import { responsive } from '../../styles/mixins';

export default EmployerList = ({onClickEmployer, data}) => {
    console.log('*****', data)
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, i }) =>
                    <TouchableOpacity 
                        style={[styles.touch, { backgroundColor: randomColors[item.status - 1] }]}
                        activeOpacity={0.9}
                        onPress={() => onClickEmployer(item.id)}
                    >
                        <Text style={styles.item}>{item.email}</Text>
                        <Text style={styles.text1}>{item.company_name}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: dimensions.width,
        flex: 1,
        backgroundColor: colors.white,
    },
    touch: {
        padding: 15,
        width: responsive.horizontal(320),
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 10,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    item: {
        fontSize: 20,
        lineHeight: 30,
        color: 'white',
        fontWeight: '600',
        fontFamily: 'OpenSans-Bold',
    },
    text1: {
        fontSize: 18,
        lineHeight: 30,
        color: 'white',
        fontWeight: '600',
        fontFamily: 'OpenSans-Bold',
    }
})
