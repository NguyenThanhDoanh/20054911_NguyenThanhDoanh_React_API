import React, { useState } from 'react';
import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView, TouchableOpacity, SectionList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';



export default function Screen2({ navigation }) {
    var [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://653f483f9e8bd3be29e0273d.mockapi.io/Screen1')
            .then((response) => response.json())
            .then((json) => setData(json))
    }, []);
    return (
        <View style={{flex:1, flexDirection:'column', justifyContent:'space-around',alignItems:'center'}}>
            <Text style={{ fontWeight: 700, fontSize: 24 }}>Welcome to Cafe world</Text>
            {
            data.map((item) => {
                return (
                    <View>
                        <Image style={{width:200, height:62 , borderRadius:10}} source={{uri:item.image}}/>
                    </View>
                );
            })
            }
            <View></View>
            <View style={{ flex: 0.1 }}>
                <TouchableOpacity style={{borderWidth:1,borderRadius:10,width:312,height:50,alignItems:'center',justifyContent:'center',
                backgroundColor:"#00BDD6"}} 
                onPress={()=>navigation.navigate('Screen_02')}>
                    <Text >Get Started</Text>            
                </TouchableOpacity>
            </View>
        </View>
    );
}