import React from 'react';
import {View, StyleSheet} from 'react-native';
import { FAB } from 'react-native-paper';

const FloatAction = () => {
  return (
    <FAB icon='plus' small color='white' style={{backgroundColor:'#10559A'}} label='Add goals' />
  );
}

const styles = StyleSheet.create({})

export default FloatAction;
