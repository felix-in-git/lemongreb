import React, { Component } from 'react';
import { Alert, Button, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import informationStore from '../store/informationStore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { DashboardImage } from '../assets/index';
import NumberFormat from 'react-number-format';
import { USD } from '@dinero.js/currencies';
import { dinero, add } from 'dinero.js';

const logoSize = 45;

export default class dashboard extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: "Bike",
                    logo: "https://img.icons8.com/office/452/motorcycle.png"
                },
                {
                    title: "Car",
                    logo: "https://img.icons8.com/office/452/sedan.png"
                },
                {
                    title: "Helicopter",
                    logo: "https://img.icons8.com/office/452/helicopter.png"
                },
                {
                    title: "Food",
                    logo: "https://img.icons8.com/office/452/hamburger.png"
                },
                {
                    title: "Scooter",
                    logo: "https://img.icons8.com/office/452/scooter.png"
                },
                {
                    title: "Truck",
                    logo: "https://img.icons8.com/office/452/truck.png"
                },
            ]
        }
    };



    componentDidMount() {
        informationStore.test = 'koko'
        this.getUserInfo()
        this.getUserBalance()
        this.getSingleRestaurant();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    flexDirection: "column"
                }}>
                    <ImageBackground source={DashboardImage} opacity={0.4} style={{ width: '100%', height: '60%', top: 0, position: 'absolute' }} />
                    <ScrollView>
                        <View
                            opacity={0.8}
                            style={{
                                flex: 1, margin: 20, marginVertical: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
                            }}>
                            <Text style={{
                                fontSize: 22, fontWeight: "bold",

                            }}>Hello {informationStore.name}</Text>
                        </View>
                        <View style={{
                            borderRadius: 10,
                            marginHorizontal: 20,
                            backgroundColor: 'white',
                            padding: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.18,
                            shadowRadius: 1.00,
                            elevation: 1,

                        }}>
                            <View style={{
                                flex: 0.3,
                                paddingBottom: 10,
                                justifyContent: 'space-between',
                                borderBottomColor: '#e3e3e3',
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 5,
                                paddingHorizontal: 20
                            }}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Balance</Text>

                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                                    {informationStore.balance}
                                </Text>

                            </View>
                            <View style={{
                                marginTop: 5,
                                flex: 0.7,
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}>
                                <TouchableOpacity
                                    onPress={() => Alert.alert("", "Coming Soon")}
                                >
                                    <View style={{
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Image
                                            style={{ height: logoSize, width: logoSize, marginBottom: 5 }}
                                            source={{
                                                uri: "https://img.icons8.com/office/452/cash-in-hand.png",
                                            }}
                                        />
                                        <Text style={{ fontSize: 14 }}>Pay</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => Alert.alert("", "Coming Soon")}
                                >
                                    <View style={{
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Image
                                            style={{ height: logoSize, width: logoSize, marginBottom: 5 }}
                                            source={{
                                                uri: "https://img.icons8.com/office/452/refund.png",
                                            }}
                                        />
                                        <Text style={{ fontSize: 14 }}>Recieve</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => Alert.alert("", "Coming Soon")}
                                >
                                    <View style={{
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Image
                                            style={{ height: logoSize, width: logoSize, marginBottom: 5 }}
                                            source={{
                                                uri: "https://img.icons8.com/office/452/refund-2.png",
                                            }}
                                        />
                                        <Text style={{ fontSize: 14 }}>History</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => Alert.alert("", "Coming Soon")}
                                >
                                    <View style={{
                                        alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Image
                                            style={{ height: logoSize, width: logoSize, marginBottom: 5 }}
                                            source={{
                                                uri: "https://img.icons8.com/office/452/money-bag.png",
                                            }}
                                        />
                                        <Text style={{ fontSize: 14 }}>Reward</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{
                            flex: 1, marginHorizontal: 20, marginTop: 20
                        }}>
                            <View style={{
                                flex: 1, flexDirection: 'column',
                            }}>

                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                                    <FlatList
                                        data={this.state.products}
                                        numColumns={3}
                                        keyExtractor={item => item.id}
                                        renderItem={({ item, index }) =>
                                            <TouchableOpacity
                                                onPress={() => this.routerManager(item.title)}
                                            >
                                                <View style={{
                                                    height: 110, width: 110, padding: 20, margin: 10, alignItems: 'center', justifyContent: 'center', shadowColor: "#000",
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 1,
                                                    },
                                                    shadowOpacity: 0.18,
                                                    shadowRadius: 1.44,
                                                    elevation: 2,
                                                    backgroundColor: 'white',
                                                    borderRadius: 10,
                                                }}>
                                                    <View style={{
                                                        borderRadius: 40,
                                                        padding: 5,
                                                        height: 80, width: 80,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',

                                                    }}>
                                                        <Image
                                                            style={{ height: '80%', width: '80%' }}
                                                            source={{
                                                                uri: item.logo,
                                                            }}
                                                        />
                                                    </View>
                                                    <Text>{item.title}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        }
                                    />
                                </View>
                            </View>
                        </View>


                        <View style={{ flex: 3 }}>
                            <View style={{
                                marginVertical: 20,
                                height: 400,
                                borderRadius: 10,
                                marginHorizontal: 20,
                                backgroundColor: 'white',
                                padding: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.18,
                                shadowRadius: 1.00,
                                elevation: 1,

                            }}>
                                 <TouchableOpacity
                                    onPress={() => this.routerManager("Food")}
                                >
                                <View style={{



                                    borderBottomColor: '#e3e3e3',
                                    borderBottomWidth: 1,
                                    flexDirection: 'column',
                                    alignItems: 'center',

                                    paddingHorizontal: 20
                                }}>

                                    <Text style={{ fontSize: 12, marginBottom: 5 }}>
                                        The Nearest Recommendation Food
                                    </Text>

                                    <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>
                                        {informationStore.restaurantName}
                                    </Text>

                                </View>

                                <View style={{
                                    marginTop: 5,
                                    flex: 0.7,
                                    flexDirection: 'row',
                                    justifyContent: 'space-around'
                                }}>
                                    <Image
                                        style={{ height: 330, width: "100%", marginBottom: 5, borderRadius: 10 }}
                                        source={{
                                            uri: informationStore.restaurantLogo,
                                        }}
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 1 }} />
                    </ScrollView>
                </View>
            </View>
        );
    }


    getUserInfo() {
        fetch('https://random-data-api.com/api/name/random_name')
            .then(async response => {
                const data = await response.json();
                informationStore.name = data.name
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    getUserBalance() {
        fetch('https://random-data-api.com/api/number/random_number')
            .then(async response => {
                const data = await response.json();

                let temp = 0;
                temp = parseInt(data.number.toString().slice(0, -4))
                if (temp !== 0) {
                    informationStore.balance = this.currencyFormat(temp);
                } else {
                    informationStore.balance = 0
                }

            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    getSingleRestaurant() {
        fetch('https://random-data-api.com/api/restaurant/random_restaurant')
            .then(async response => {
                const data = await response.json();
                informationStore.restaurantName = data.name
                informationStore.restaurantReview = data.review
                informationStore.restaurantLogo = data.logo
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }


    currencyFormat(num) {
        return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    routerManager(input) {
        informationStore.headerTitle = input
        if (input !== "Food") {
            this.props.navigation.navigate('bike')
        } else {
            // this.props.navigation.navigate('food')
            Alert.alert("", "Coming Soon")
        }
    }

}