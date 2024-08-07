import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View, TouchableOpacity, Alert} from 'react-native';

const Home = ({navigation}) => {
      const [data, setData] = useState([]); //state atau penampung data

      const ambildata = async () => {
        try{
          const response = await fetch('https://api-berita-indonesia.vercel.app/'); //ambil data
          const json = await response.json(); //ubah data ke JSON
          return setData(json.endpoints);
        } catch (error) {
          console.log(error); //menampilkan eror
          Alert.alert('info', 'koneksi bermasalah');
        }
      };

  useEffect(() => {
  ambildata();
  }, []);
  return (
    <View style = {{padding:10}}>
      <FlatList
      data={data}
      keyExtractor={({nomor}) => nomor }
      renderItem={({item}) => 
      (
        <TouchableOpacity
        style={{
          backgroundColor:'white',
          marginBottom: 10,
          padding:10,
          borderRadius: 5,
        }}
        onPress={() => {
          navigation.navigate("Berita", {berita: item.name})
        }
        }>
          <Text style={{color:'black',fontSize:20, fontWeight: "bold"}}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )} 
      />
    </View>
  );

};
export default Home

const styles = StyleSheet.create({})