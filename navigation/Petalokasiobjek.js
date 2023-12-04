import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import Listdata from '../Listdata';
import { WebView } from 'react-native-webview';


const Tab = createBottomTabNavigator();

//const webmap = require('../peta/Map.html')

//Form input dari github pages
const forminput = 'https://diananggrainia.github.io/pgpbl-responsi/';

//Peta web dari gituhub pages
const webmap = 'https://diananggrainia.github.io/pgpbl-responsi/map.html'

function HomeScreen() {
    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <Text style={styles.title}>TEMPAT NUGAS</Text>
                    <Image source={require('../peta/logoapp.jpg')} style={
                        styles.iconapp} />
                <Text style={{ textAlign: 'justify', fontFamily: 'serif', marginTop: 20, fontSize: 17.5, marginHorizontal: 10 }}>Pada proses pengerjaan tugas atau belajar, seorang mahasiswa terkadang merasa jenuh dan bosan apabila hanya mengerjakan di kos saja.
                    Selain itu, terkadang seorang mahasiswa juga merasa bingung ketika harus memilih lokasi yang tepat dan sesuai untuk menyelesaikan tugas atau belajar mereka. Untuk mengatasi hal tersebut diciptakan
                    sebuah aplikasi mobile "Tempat Nugas" yang bisa menjadi alternatif. "Tempat Nugas" adalah sebuah aplikasi untuk melakukan pemetaan lokasi tempat-tempat untuk mengerjakan tugas atau belajar
                    yang berada di UGM dan sekitarnya. Aplikasi ini dapat digunakan untuk merekomendasikan tempat-tempat tertentu untuk mengerjakan tugas atau belajar dengan cara menginputkan datanya, aplikasi ini
                    juga dapat memberikan informasi mengenai persebaran tempat-tempat yang telah diinput</Text>
                <View style={{ marginTop: 20, marginLeft: 15 }}>
                    <Text style={{ marginBottom: 10, marginTop: 20, fontFamily: 'serif', fontSize: 17.5, fontWeight: 'bold' }}>Architecture:</Text>
                    <Text style={{ fontFamily: 'serif', fontSize: 15 }}>1. React Native</Text>
                    <Text style={{ fontFamily: 'serif', fontSize: 15 }}>2. HTML</Text>
                    <Text style={{ fontFamily: 'serif', fontSize: 15 }}>3. LeafletJS</Text>
                    <Text style={{ fontFamily: 'serif', fontSize: 15 }}>4. Google Sheets</Text>
                    <Text style={{ fontFamily: 'serif', fontSize: 15 }}>5. Apps Script</Text>
                    <Text style={{ fontFamily: 'serif', fontSize: 15 }}>6. FontAwesome5</Text>
                    <Text style={{ fontFamily: 'serif', fontSize: 15 }}>7. GitHub</Text>
                </View>
            </View>
        </ScrollView>
    );
}

function MapScreen() {
    return (
        <WebView
            source={{ uri: webmap }}
        />
    );
}

function AddDataScreen() {
    return (
        <WebView
            source={{ uri: forminput }}
        />
    );
}

function GalleryScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>GALLERY</Text>
            <View style={styles.listitems}>
                <Image source={require('../peta/kopmaUGM.jpg')} style={
                    styles.image} />
                <Text style={styles.caption}>Kopma UGM</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/perpusat1.jpg')} style={
                    styles.image} />
                <Text style={styles.caption}>Perpustakaan Pusat UGM</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/gsp.png')} style={
                    styles.image} />
                <Text style={styles.caption}>Grha Sabha Pramana (GSP) UGM</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/tilc.png')} style={
                    styles.image} />
                <Text style={styles.caption}>Teaching Industry Learning Center (TILC) UGM</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/halaman.png')} style={
                    styles.image} />
                <Text style={styles.caption}>Halaman Depan Fakultas Psikologi UGM</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/koridor.png')} style={
                    styles.image} />
                <Text style={styles.caption}>Teras/Koridor Lembaga Pengembangan Kualitas Manusia Psikologi Fakultas Psikologi UGM</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/cowork1.jpeg')} style={
                    styles.image} />
            </View>
            <View style={{ padding: 0.1, alignItems: 'center', }}>
                <Image source={require('../peta/cowork2.jpeg')} style={
                    styles.image} />
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/cowork3.jpeg')} style={
                    styles.image} />
                <Text style={styles.caption}>Zomia Co-Working Space</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/dssdi3.jpeg')} style={
                    styles.image} />
            </View>
            <View style={{ padding: 0.1, alignItems: 'center', }}>
                <Image source={require('../peta/dssdi2.jpeg')} style={
                    styles.image} />
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/dssdi1.jpeg')} style={
                    styles.image} />
                <Text style={styles.caption}>Direktoran Sistem dan Sumberdaya Informasi UGM</Text>
            </View>
        </ScrollView>
    );
}

function ListDataScreen() {
    return (
        <View>
            <Listdata />
        </View>
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio />
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
                <Tab.Screen name="Add Data" component={AddDataScreen} options={{
                    tabBarLabel: 'Add Data',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="plus-circle" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="List Data" component={ListDataScreen} options={{
                    tabBarLabel: 'List Data',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="th-list" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Gallery" component={GalleryScreen} options={{
                    tabBarLabel: 'Gallery',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="images" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user-alt" color={color} size={size} />
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
        textAlign: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'serif',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 25,
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
        padding: 20,

    },
    buttomtabs: {
        fontFamily: 'serif',
    },
    iconapp: {
        marginHorizontal: 80,
        height: 200,
        width: 200,
    }
});