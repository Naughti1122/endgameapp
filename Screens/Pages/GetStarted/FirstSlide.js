import React from 'react';
import {View, StyleSheet, Image, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import welcome from '../../../Images/welcome.png';

const FirstSlide = ({navigation}) => {

    const handleNext = () => {
        navigation.navigate('SecondSlide')
    }


    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
                <View style={styles.slidecontainer}>
                    <View>
                        <Image source={welcome} style={{width:'100%', height: 300}} resizeMode='center' />
                    </View>
                    <View>
                        <Text 
                        style={{color:'#10559A', 
                        marginHorizontal: 10, fontWeight:'200',
                        textAlign:'center', padding:20, fontSize:15}}>
                            EndGoal is a mobile app which helps users to monitor their goals and targets over
                            a duration of time either Daily, Weekly, Monthly or Yearly.
                        </Text>
                        <TouchableOpacity
                        onPress={handleNext}
                        style={{alignItems:'center', margin:20}}>
                            <Text 
                            style={{fontFamily:'Copperplate',backgroundColor:'#10559A',
                            padding:15, color:'white', width:100, textAlign:'center'}}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    slidecontainer: {
        flex:1,
        justifyContent:'center',
    },
});

export default FirstSlide;
