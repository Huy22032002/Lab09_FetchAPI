import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListBikes from './ListBikes';
import Detail from "./DetailBike";
const App = () => {
  const Stack = createNativeStackNavigator();
  function introScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 2, alignContent: 'center', justifyContent:  'center' }}>
          <Text
            style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
            A premium online store for sporter and their stylish choice
          </Text>
        </View>
        <View
          style={{
            flex: 5,
            backgroundColor: 'pink',
            borderRadius: 20,
            alignContent: 'center',
            justifyContent: 'center',
            width: 300, height: 280
          }}>
          <Image
            source={require('./bike1.png')}
            style={{ width: 270, height: 250, alignSelf:'center' }}
          />
        </View>
        <View style={{ flex: 2, alignContent: 'center' }}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: 'bold',
              textAlign: 'center',
              textTransform: 'uppercase',
              marginTop:10
            }}>
            power bike shop
          </Text>
        </View>
        <View style={{ flex: 2, alignContent: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('list');
            }}
            style={styles.btnStart}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="intro" component={introScreen} />
        <Stack.Screen name="list" component={ListBikes} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
    alignItems:'center'
  },
  btnStart: {
    width: 320,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});
export default App;
