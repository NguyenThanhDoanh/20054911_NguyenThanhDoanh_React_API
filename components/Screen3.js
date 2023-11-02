import React, { useState } from 'react';
import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView, TouchableOpacity, SectionList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';



export default function Screen1({ navigation }) {
    var [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://653f483f9e8bd3be29e0273d.mockapi.io/Screen2')
            .then((response) => response.json())
            .then((json) => setData(json))
    }, []);
    return (
        <View style={{flex:1, flexDirection:'column', justifyContent:'space-around',alignItems:'center'}}>
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Screen3')}>
                                <View style={{
                                    flexDirection: 'row', marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1
                                    , marginBottom: 10
                                }}>
                                    <View style={{ flexDirection: 'row' ,justifyContent:'space-between',width:350,height:64}}>
                                            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                            <Image source={item.image} style={{ width: 60, height: 60, alignSelf: 'center'}} />
                                            <View style={{flexDirection: 'column', justifyContent:'space-between'}}>
                                                <Text style={{ fontWeight: 400, fontSize: 16 }}>{item.status}</Text>
                                                <Text style={{ fontWeight: 400, fontSize: 14 }}>{item.minute}</Text>
                                            </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center',marginRight:20}}>
                                                <TouchableOpacity style={{borderRadius:50, borderWidth:1,width:20,height:20,justifyContent:"center",alignItems:'center',marginRight:15,
                                            backgroundColor:'green'
                                            }}>
                                                    <Text>+</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{borderRadius:50, borderWidth:1,width:20,height:20, justifyContent:"center",alignItems:'center', backgroundColor:'green'}}>
                                                    <Text>-</Text>
                                                </TouchableOpacity>
                                            </View>
                                    </View>
                                    
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </ScrollView>
            <View style={{ flex: 0.1 }}>
                <TouchableOpacity style={{borderWidth:1,borderRadius:10,width:312,height:50,alignItems:'center',justifyContent:'center',
                backgroundColor:"#EFB034"}} 
                onPress={()=>navigation.navigate('Screen_02')}>
                    <Text >GO TO CART</Text>            
                </TouchableOpacity>
            </View>
        </View>
    );
}