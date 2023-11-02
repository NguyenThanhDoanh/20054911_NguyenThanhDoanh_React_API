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
        <View style={{}}>
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Screen_03')}>
                                <View style={{
                                    flexDirection: 'column', marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1
                                    , marginBottom: 10
                                }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Image source={item.image} style={{ width: 347, height: 114, alignSelf: 'center', marginTop: 2 }} />
                                        <View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ fontWeight: 400, fontSize: 14 }}>{item.status}</Text>
                                                <Text style={{ fontWeight: 400, fontSize: 14 }}>{item.minute}</Text>
                                            </View>
                                            <Text style={{ fontWeight: 700, fontSize: 16 }}>{item.title}</Text>
                                            <Text style={{ fontWeight: 400, fontSize: 14 }}>{item.address}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </ScrollView>
        </View>
    );
}