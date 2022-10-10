import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Pages/HomeScreen';
import FirstSlide from './Pages/GetStarted/FirstSlide';
import SecondSlide from './Pages/GetStarted/SecondSlide';
import ThirdSlide from './Pages/GetStarted/ThirdSlide';
import Continue from './Pages/Continue/Continue';
import FloatAction from './Component/FloatAction';
import FloatWriting from './Component/FloatWriting';

const Navigation = () => {

    const stack = createStackNavigator();

    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <stack.Navigator screenOptions={{header:()=>null}}>
                    <stack.Screen name='HomeScreen' component={HomeScreen} />
                    <stack.Screen name='FirstSlide' component={FirstSlide} />
                    <stack.Screen name='SecondSlide' component={SecondSlide} />
                    <stack.Screen name='ThirdSlide' component={ThirdSlide} />
                    <stack.Screen name='Continue' component={Continue} />
                    <stack.Screen name='FloatAction' component={FloatAction} />
                    <stack.Screen name='FloatWriting' component={FloatWriting} />
                </stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
