import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
    const handleExplorePress = () => {
        // Navigasi ke halaman 'Petalokasiobjek'
        navigation.navigate('Petalokasiobjek');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tempat Nugas</Text>
            <TouchableOpacity style={styles.exploreButton} onPress={handleExplorePress}>
                <Text style={styles.buttonText}>Telusuri</Text>
            </TouchableOpacity>
            <Image
                source={require('../peta/belajar.jpg')} // Ganti 'path-to-your-image' dengan path gambar Anda
                style={styles.logo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 550,
        height: 300,
        resizeMode: 'contain',
        marginTop: 80,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        marginBottom: 5,
        fontFamily: 'serif',
        fontWeight: 'bold',
        marginTop: 200,
    },
    exploreButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
});

export default LandingPage;
