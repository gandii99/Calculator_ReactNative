import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function App() {

  const [value, setValue] = useState('0');
  const onPress = () => setValue(prevCount => prevCount + 1);
  const resetValue = () => setValue('');
  function evil(fn) {
    return new Function('return ' + fn)();
  };
  const addValue = (newValue) => {
    if(newValue === '='){
      setValue(evil(value));
    }else{
      setValue(prevCount => prevCount + newValue);
    }
    
  };

  return (

      <View style={styles.main}>
        <View style={styles.display}><Text style={styles.displayText}>{value}</Text></View>

        <View style={styles.keyboard}>
          <View style={styles.row}>
            <TouchableOpacity onPress={resetValue} style={[styles.button, styles.uper]}><Text style={styles.buttonText}>AC</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.connectCell, styles.uper]}><Text style={styles.buttonText}></Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('/')}} style={[styles.button, styles.oper]}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => {addValue('7')}} style={styles.button}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('8')}} style={styles.button}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('9')}} style={styles.button}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('*')}} style={[styles.button, styles.oper]}><Text style={styles.buttonText}>x</Text></TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => {addValue('4')}} style={styles.button}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('5')}} style={styles.button}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('6')}} style={styles.button}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('-')}} style={[styles.button, styles.oper]}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => {addValue('1')}} style={styles.button}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('2')}} style={styles.button}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('3')}} style={styles.button}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('+')}} style={[styles.button, styles.oper]}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => {addValue('0')}} style={[styles.button, styles.connectCell]}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue(',')}} style={styles.button}><Text style={styles.buttonText}>,</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {addValue('=')}} style={[styles.button, styles.oper]}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
          </View>

        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  display:{
    flexBasis: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '40%',
    backgroundColor: '#535457',
  },
  keyboard: {
    flexBasis: '100%',
    height: '60%',
    flexGrow: 1,
    flexDirection: 'column',
  },
  row: {
    flexBasis: '20%',
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  button:{
    flexBasis: '25%',
    backgroundColor: '#7d7d7f',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectCell:{
    flexBasis: '50%',
  },
  buttonText:{
    fontSize: 34,
    color: 'white',
  },
  displayText:{
    fontSize: 56,
    color: 'white',
    paddingRight: 20,
    fontWeight: 'bold',
  },
  oper:{
    backgroundColor: '#f1a33c',
  }, 
  uper:{
    backgroundColor: '#646466',
  }, 
});
