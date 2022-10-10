import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, ScrollView} from 'react-native';
import FloatAction from '../../Component/FloatAction';

const Continue = ({navigation}) => {

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            
                <View style={{flex: 0.1, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                    <Text>Your targets</Text>
                    <Text>username</Text>
                </View>
                <View style={{flex:0.9, backgroundColor:'pink'}}>
                    <View>
                        <Text>Retrieve info</Text>
                    </View>
                <TouchableOpacity
                onPress={()=>navigation.navigate('FloatWriting')}
                style={{position:'absolute', bottom:10, alignSelf:'center'}}>
                    <FloatAction />
                </TouchableOpacity>
                </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Continue;
