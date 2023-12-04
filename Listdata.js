import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet, Button, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbxqmmnNkby1djVjhYmyGz7pANe9DN34bzsqZAqxGUmxi6hwvSKbdfC5_SfDcsackw/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : ( 
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                                <View>
                                    <View style={styles.card}>
                                        <View>
                                            <Text style={styles.cardtitle}>{item.nama}</Text>
                                            <Text>{item.deskripsi}</Text>
                                            <Text>{item.latitude}</Text>
                                            <Text>{item.longitude}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.lokasi} >
                                        <Button title="Lokasi"
                                            onPress={() => Linking.openURL('google.navigation:q=' + (item.latitude) + ',' + (item.longitude))}
                                            color={'#007AFF'}
                                        />
                                    </View>
                                </View>
                            
                        )}
                    />
            )}
        </SafeAreaView>

    )
}

export default Callapi

const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        borderRadius: 100,
        width: 80,
    },
    cardtitle: {
        fontSize: 13.3,
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7
    },
    lokasi: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'serif',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 25,
    },
})
