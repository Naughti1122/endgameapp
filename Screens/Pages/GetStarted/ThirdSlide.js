import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const ThirdSlide = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View>
                <TextInput placeholder='Type your username here' />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default ThirdSlide;
