import React, { useState } from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Text, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import secondewelcome from '../../../Images/secondewelcome.png';
import InputScrollView from 'react-native-input-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import app from '../../../Firebase/Config';

const SecondSlide = ({navigation}) => {

    const auth = getAuth(app);

    const db = getFirestore(app);

    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async() => {
        const newUser = {
            userName: userName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            id: uuidv4()
        };
        try {
            await setDoc(doc(db, "Users", newUser.id), newUser);
        } catch (error) {
            console.log(error);
        };
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            const user = userCredential.user;
            console.log('Logged in with', user.email);
            navigation.navigate('Continue');
        })
        .catch((error) =>alert('Log in first'));
    };

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={{marginVertical: 30,}}>
                        <Image source={secondewelcome} style={styles.image} resizeMode='center'  />
                    </View>
                    <View style={{alignItems:'center', marginTop: 10}}>
                        <Text style={{fontFamily:'Futura'}}>CREATE A PROFILE</Text>
                    </View>
                    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <InputScrollView>
                        <View style={styles.inputs}>
                            <View style={{borderBottomWidth:1, borderBottomColor:'#10559A', marginVertical:20}}>
                                <TextInput onChangeText={(userName)=>setUserName(userName)} style={styles.input} value={userName} placeholder='User Name' />
                            </View>
                            <View style={{borderBottomWidth:1, borderBottomColor:'#10559A', marginVertical: 20}}>
                                <TextInput onChangeText={(email)=>setEmail(email)} style={styles.input} value={email} placeholder='Email Address' />
                            </View>
                            <View style={{borderBottomWidth:1, borderBottomColor:'#10559A', marginVertical: 20}}>
                                <TextInput onChangeText={(password)=>setPassword(password)} style={styles.input} value={password} placeholder='Password' />
                            </View>
                            <View style={{borderBottomWidth:1, borderBottomColor:'#10559A', marginVertical: 20}}>
                                <TextInput onChangeText={(phoneNumber)=>setPhoneNumber(phoneNumber)} style={styles.input} value={phoneNumber} placeholder='Phone Number' />
                            </View>
                        </View>
                        <View style={{alignItems:'center', margin:50}}>
                            <TouchableOpacity onPress={handleSignUp}>
                                <Text style={{fontFamily:'Futura',backgroundColor:'#10559A',
                                padding: 10, color:'white', width:100, textAlign:'center'}}>SUBMIT</Text>
                            </TouchableOpacity>
                        </View>
                    </InputScrollView>
                    </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputs: {
        marginHorizontal: 50,
    },
    input: {
        padding: 10,
        fontSize: 16,
    },
    image: {
        width:'100%', 
        height: 300,
    },
})

export default SecondSlide;
