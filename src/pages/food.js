import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import informationStore from '../store/informationStore';
import MapView from "react-native-maps";

export default class bike extends Component {

    componentDidMount() {
        // this.getProduct()
    }

    getProduct() {
        fetch('https://foodbukka.herokuapp.com/api/v1/menu')
            .then(async response => {
                const data = await response.json();
                informationStore.fetch = data.Result
                console.log(data.Result)
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }



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

                        }}>{informationStore.restaurantName}</Text>
                    </View>
                </View>
                <View style={{ flex: 7, }}>
                    <FlatList
                        data={informationStore.foodProducts}

                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                // onPress={() => this.routerManager(item.title)}
                            >
                                <View style={{
                                    height: 110, marginLeft: 10, marginHorizontal: 10, marginVertical: 5, alignItems: 'center', justifyContent: 'center', shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.18,
                                    shadowRadius: 1.44,
                                    elevation: 2,
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        borderRadius: 40,
                                        padding: 5,
                                        marginRight: 5,
                                        height: "100%", width: "100%",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flex: 1.5
                                    }}>
                                        <Image
                                            style={{ height: '90%', width: '90%', borderRadius: 10 }}
                                            source={{
                                                uri: item.images[1],
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: 3 }}>
                                        <Text style={{ fontSize: 19, fontWeight: 'bold' }}>{item.menuname}</Text>
                                        <Text style={{ fontSize: 15, justifyContent: 'flex-end' }}>{Math.floor(Math.random() * 100000) + 1}</Text>
                                    </View>
                                    <View style={{
                                        flex: 2, justifyContent: 'center',
                                        alignItems: 'center,'
                                    }}>
                                        <View style={{
                                            backgroundColor: 'red',

                                            height: "100%",
                                            width: 100,

                                        }}>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <View style={{ flex: 2, }}>
                    <View style={{
                        backgroundColor: "white", margin: 20, borderRadius: 10, shadowColor: "#000",
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
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Price Total</Text>

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