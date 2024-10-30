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
const ListBikes = ({navigation}) => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);//filter
  const [filter, setFilter] = useState('All'); //filter
  const fetchAPI = () => {
    axios
      .get('https://670fef49a85f4164ef2c890d.mockapi.io/animalTypes')
      .then((response) => {
        setBikes(response.data);
        setFilteredBikes(response.data); //filter
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //filter
  const applyFilter = (selectedFilter) => {
    setFilter(selectedFilter);
    if (selectedFilter === 'All') {
      setFilteredBikes(bikes);
    } else {
      const filteredData = bikes.filter(bike => bike.type === selectedFilter);
      setFilteredBikes(filteredData);
    }
  };
  const renderBike = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('detail',{item})}>
      <View
        style={{
          backgroundColor: 'pink',
          borderRadius: 15,
          alignItems: 'center',
          height:180,
          margin:8
        }}>
        <Image
          source={ item.image }
          style={{ width: 150, height: 100 }}
        />
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
      </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{ flex: 3, justifyContent: 'center' }}>
        <Text
          style={{
            color: 'red',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          The World's Best Bike{' '}
        </Text>
        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.btnFilter} onPress={() => applyFilter('All')}>
            {' '}
            <Text style={styles.txtBtn}> All </Text>{' '}
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnFilter} onPress={()=>applyFilter("a")} >
            {' '}
            <Text style={styles.txtBtn}> RoadBike </Text>{' '}
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnFilter} onPress={()=>applyFilter("b")} >
            {' '}
            <Text style={styles.txtBtn}> Moutain </Text>{' '}
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={bikes}
        renderItem={renderBike}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  txtBtn: {
    color: 'gray',
    fontSize: 20,
    textAlign:'center'
  },
  btnFilter: {
    borderColor: 'red',
    borderWidth: 1,
    width: 100,
    height: 40,
    borderRadius:10,
    marginRight:6
  },
});
export default ListBikes;
