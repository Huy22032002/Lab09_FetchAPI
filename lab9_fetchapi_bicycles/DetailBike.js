import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
const DetailBike = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text> {item.title}</Text>
      <Text> {item.price} </Text>
      <Image source={item.image} style={{ width: 40, height: 40 }} />
    </View>
  );
};
export default DetailBike;
