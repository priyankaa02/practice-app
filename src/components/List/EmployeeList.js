import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { dimensions, randomColors, colors } from '../../styles/variables';
import { responsive } from '../../styles/mixins';
import Image from 'react-native-fast-image';

export default EmployeeList = ({onClickEmployee, data}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, i }) => 
                  <TouchableOpacity 
                    style={[styles.touch, { backgroundColor: randomColors[item.status - 1] }]}
                    activeOpacity={0.9}
                    onPress={() => onClickEmployee(item.id)}
                  >
                    <Image source={{uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}  style={styles.img} resizeMode={'cover'}/>
                    <View style={{marginLeft: responsive.horizontal(30)}}>
                      <Text style={styles.item}>{item.first_name + " " + item.last_name}</Text>
                      <Text style={styles.text1}>{item.email}</Text>
                      <Text style={styles.text1}>{item.email}</Text>
                    </View>
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
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 10,
    },
    img: {
        width: responsive.horizontal(60),
        height: responsive.horizontal(60),
        borderRadius: responsive.horizontal(60) / 2,
        marginTop: responsive.vertical(10),
    },
    item: {
        fontSize: 20,
        lineHeight: 30,
        color: 'white',
        fontWeight: '600',
        fontFamily: 'OpenSans-Bold',
    },
    text1: {
        fontSize: 16,
        lineHeight: 25,
        color: 'white',
        fontWeight: '600',
        fontFamily: 'OpenSans-Bold',
    }
})
