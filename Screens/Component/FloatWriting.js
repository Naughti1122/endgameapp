import React, { useState } from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Keyboard, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, FlatList} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import app from '../../Firebase/Config'; 
import { v4 as uuidv4 } from 'uuid';
import { doc, getFirestore, setDoc } from "firebase/firestore";


const FloatWriting = ({navigation}) => {

    const db = getFirestore(app);

    const [inputList, setInputList] = useState([]);

    const [goalInput, setGoalInput] = useState('');

    // const handleSubmit = () => {
    //     // const newGoal = {
    //     //     inputList: inputList,
    //     //     id: uuidv4(),
    //     // };
    //     try {
    //         if (Day == 'Day' ) {
    //             // await setDoc(doc(db, "Day", newGoal.id), newGoal);
    //             console.log('day option');
    //         } if (Week == 'Week') {
    //             // await setDoc(doc(db, "Week", newGoal.id), newGoal);
    //             console.log('week option');
    //         } if (Month == 'Month') {
    //             // await setDoc(doc(db, "Month", newGoal.id), newGoal);
    //             console.log('month option');
    //         } if (Year == 'Year') {
    //             // await setDoc(doc(db, "Year", newGoal.id), newGoal);
    //             console.log('year option');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     };
    //     // navigation.navigte('Continue');
    // };



    const DayOption = <Text>DAY</Text>;
    const WeekOption = <Text>WEEK</Text>;
    const MonthOption = <Text>MONTH</Text>;
    const YearOption = <Text>YEAR</Text>;

    const handleSubmit = (name)=> async() => {
        console.log(name);
        let newGoal = {
                goalInput: goalInput,
                id: uuidv4()};
        try {
             await setDoc(doc(db, name, newGoal.id), newGoal);
        } catch (error) {
            console.log(error);
        }
    };

    
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:0.9}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <InputScrollView>
                    <View style={{alignItems:'center', margin:10}}>
                        <TouchableOpacity style={styles.addmorebtn}
                        onPress={()=>{let data = {goal:goalInput}
                        setInputList([...inputList, data])}}>
                            <Ionicons name="add-circle-outline" size={20} color="white" />
                            <Text style={styles.addmoretext}>Add more</Text>
                        </TouchableOpacity>
                    </View>
                        <TextInput
                            value={goalInput}
                            onChangeText={(goalInput)=>setGoalInput(goalInput)}
                            style={styles.textInput}
                            multiline={true}
                            placeholder='Type your goals here...' />
                    {
                        inputList.map((item)=>{
                            return(
                                <View style={styles.inputlist}>
                                        <AntDesign name="caretright" size={10} color="#10559A" />
                                        <Text style={styles.inputlisttext}>{item.goal}</Text>
                                </View>
                            )
                        })
                    }
                </InputScrollView>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <View style={styles.options}>
                <TouchableOpacity onPress={handleSubmit('Day')} style={styles.optionsbtn}>
                    <Text  style={styles.optionstext}>{DayOption}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit('Week')} style={styles.optionsbtn}>
                    <Text  style={styles.optionstext}> {WeekOption} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit('Wonth')} style={styles.optionsbtn}>
                    <Text  style={styles.optionstext}> {MonthOption} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit('Year')} style={styles.optionsbtn}>
                    <Text  style={styles.optionstext}> {YearOption} </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    options:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding: 5,
        position:'absolute',
        bottom: 10,
        alignSelf:'center',
        flex: 0.1,
        
    },
    optionsbtn:{
        width:100,
    },
    optionstext:{
        fontSize: 10,
        backgroundColor:"#10559A",
        padding: 20,
        color:'white',
        fontFamily:'Verdana',
        textAlign:'center',
    },
    textInput:{
        padding: 10,
        fontSize: 18,
        fontFamily:'Verdana',
        marginVertical: 20,
        borderBottomWidth: 1,
        alignSelf:'center'
    },
    addmoretext: {
        fontFamily:'Verdana',  
        color:'white',
        paddingHorizontal: 5,
    },
    addmorebtn:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'#10559A', 
        padding:10,
        borderRadius:100
    },
    inputlist:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        marginBottom: 20,
        padding:10,
    },
    inputlisttext:{
        fontFamily:'Verdana',  
        color:'#10559A',
        fontSize: 15,
        paddingHorizontal: 1,
    },
});

export default FloatWriting;
