import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import app from '../../Firebase/Config';
import {getAuth} from 'firebase/auth';

const HomeScreen = ({navigation}) => {

    // const auth = getAuth(app);

    // const handleEnter = () => {
    //     const unsubscribe = auth.onAuthStateChanged((user)=>{
    //         if (user) {
    //             navigation.navigate('Continue');
    //         } else {
    //             navigation.navigate('FirstSlide');
    //         }
    //     });
    //     return unsubscribe; 
    // };


    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View style={styles.maininfo}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.title}>EndGoal</Text>
                    <MaterialCommunityIcons style={{padding:10}} name="view-dashboard-edit-outline" size={50} color="#10559A" />
                </View>
                <Text style={styles.info}>monitor your goals and productivity</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('FirstSlide')}
                style={{borderBottomWidth:1, padding:10, borderBottomColor:'white'}}>
                    <Text style={{color:'white', fontFamily:'Verdana'}}>GET STARTED</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Continue')}
                style={{borderBottomWidth:1, padding:10, borderBottomColor:'white'}}>
                    <Text style={{color:'white', fontFamily:'Verdana'}}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    maininfo: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    title: {
        fontSize: 40,
        fontFamily:'Copperplate',
        color:'#10559A',
        padding: 5,
    },
    info:{
        color:'white',
        backgroundColor:'#10559A',
        padding: 10,
        fontWeight:'200',
        fontFamily:'Futura',
    },
    options:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'#10559A',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        marginHorizontal: 50,
    },
})

export default HomeScreen;
