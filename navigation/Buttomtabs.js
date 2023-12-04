import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';


const Tab = createBottomTabNavigator();

const webmap = require('../peta/Map.html')


function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>MY MAPS</Text>
            <View style={styles.listitems}>
                <Image source={require('../peta/das.jpg')} style={
                    styles.image} />
                <Text style={styles.caption}>Peta DAS Kemuning</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/subdas.jpg')} style={
                    styles.image} />
                <Text style={styles.caption}>Peta Sub-DAS Kemuning</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/ordesungai.jpg')} style={
                    styles.image} />
                <Text style={styles.caption}>Peta Orde Sungai DAS Kemuning</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/perwilayahan.jpg')} style={
                    styles.image} />
                <Text style={styles.caption}>Peta Perwilayahan DAS Kemuning</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/kemiringan.jpg')} style={
                    styles.image} />
                <Text style={styles.caption}>Peta Kemiringan DAS Kemuning</Text>
            </View>

        </ScrollView>
    );
}

function MapScreen() {
    return (
        <WebView
            source={ webmap }
        />
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}

function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile />
        </View>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}  >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="home" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Map" component={MapScreen} options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="map-marked-alt" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user-circle" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
                    tabBarLabel: 'Mahasiswa',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="users" color={color} size={size} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: 345,
        height: 245,
        resizeMode: 'stretch'
    },
    listitems: {
        padding: 20,
        alignItems: 'center',
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'serif',
        textAlign: 'center',
        marginTop: 10,
    },
});