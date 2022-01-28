import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import informationStore from '../store/informationStore';
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
};

export default class bike extends Component {
    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'column' }}>
                {/* <ScrollView style={{flex:1, flexDirection: 'column' }}> */}
                <View style={{ flex: 0.5, backgroundColor: "white", flexDirection: 'row', }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('dashboard')}
                    >
                        <View style={{ flex: 1, backgroundColor: "white", alignItems: 'center', justifyContent: 'center', }}>
                            <Image
                                style={{ height: 25, width: 25 }}
                                source={{
                                    uri: "https://img.icons8.com/ios/344/back--v1.png",
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 8, backgroundColor: "white", alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{
                            fontSize: 22, fontWeight: "bold",

                        }}>{informationStore.headerTitle}</Text>
                    </View>
                </View>
                <View style={{ flex: 4, }}>
                    <MapView
                        style={{ flex: 1 }}
                        //specify our coordinates.
                        initialRegion={
                            tokyoRegion
                        }
                    >
                    <Marker coordinate={tokyoRegion} />
                    {/*marker to a nearby location */}
                    <Marker
                    pinColor="green"
                        coordinate={{
                            latitude: 35.67714827145542,
                            longitude: 139.6551462687416,
                        }}
                    />
                    </MapView>
                </View>
                <View style={{ flex: 2.6, }}>
                    <View style={{
                        height: 250, backgroundColor: "white", margin: 20, borderRadius: 10, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.18,
                        shadowRadius: 1.00,
                        elevation: 1,
                    }}>
                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 10
                            }}
                            // onChangeText={onChangeNumber}
                            value={9}
                            placeholder="Origin"
                        />
                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 10
                            }}
                            // onChangeText={onChangeNumber}
                            value={9}
                            placeholder="Destination"
                        />

                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 10
                            }}
                            // onChangeText={onChangeNumber}
                            value={9}
                            placeholder="Apply Promo"
                        />

                        <View style={{
                            marginTop: 10,
                            paddingBottom: 10,
                            justifyContent: 'space-between',
                            borderTopColor: '#e3e3e3',
                            borderTopWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 5,
                            paddingHorizontal: 20
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Price</Text>

                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                {informationStore.balance}
                            </Text>

                        </View>

                    </View>
                </View>
                {/* </ScrollView> */}
            </View>

        );
    }
}