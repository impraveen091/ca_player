import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as IMAGE from '../resources/images/index'
import { Bust, YOUTUBE_LINK, bird, links_webm } from '../common/test'

export default function Home_S(props) {

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ padding: 5, flexDirection: "row", alignItems: "center" }}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={IMAGE.PLAYER_LOGO}
                />
                <Text style={{ fontSize: 20, color: '#f9d28f', fontWeight: "900" }}>CA Player</Text>
            </View>
            <ScrollView>
                <View style={{ padding: 10, marginTop: 20 }}>
                    <Text
                        style={{ fontSize: 20, color: "#454545", fontWeight: 700 }}>
                        Top Videos
                    </Text>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", marginTop: 15 }}>
                        <TouchableOpacity

                            onPress={() => {
                                props.navigation.navigate('VideoShow', {
                                    url: bird
                                })
                            }}
                            style={{ width: '33%', height: 170, borderRadius: 8, backgroundColor: "#D3D3D3", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={IMAGE.BIRD}
                                style={{ width: '100%', height: 170, borderRadius: 8 }}
                            />
                            <Image
                                style={{ width: 35, height: 35, position: "absolute" }}
                                source={IMAGE.PLAY}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('VideoShow', {
                                    url: Bust
                                })

                            }}
                            style={{ width: '33%', height: 170, borderRadius: 8, backgroundColor: "#D3D3D3", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={IMAGE.BUST}
                                style={{ width: '100%', height: 170, borderRadius: 8 }}
                            />
                            <Image
                                style={{ width: 35, height: 35, position: "absolute" }}
                                source={IMAGE.PLAY}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('VideoShow', {
                                    url: YOUTUBE_LINK
                                })
                            }}
                            style={{ width: '33%', height: 170, borderRadius: 8, backgroundColor: "#D3D3D3", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={IMAGE.DEMO}
                                style={{ width: '100%', height: 170, borderRadius: 8 }}
                            />
                            <Image
                                style={{ width: 35, height: 35, position: "absolute" }}
                                source={IMAGE.PLAY}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 20, color: "#454545", fontWeight: 700 }}>
                            Recent Videos
                        </Text>
                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", marginTop: 15 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('VideoShow', {
                                        url: links_webm
                                    })
                                }}
                                style={{ width: '33%', height: 170, borderRadius: 8, backgroundColor: "#d3d3d3", justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={IMAGE.DEMO}
                                    style={{ width: '100%', height: 170, borderRadius: 8 }}
                                />
                                <Image
                                    style={{ width: 35, height: 35, position: "absolute" }}
                                    source={IMAGE.PLAY}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('VideoShow', {
                                        url: links_webm
                                    })
                                }}
                                style={{ width: '33%', height: 170, borderRadius: 8, backgroundColor: "#d3d3d3", justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={IMAGE.BUST}
                                    style={{ width: '100%', height: 170, borderRadius: 8 }}
                                />
                                <Image
                                    style={{ width: 35, height: 35, position: "absolute" }}
                                    source={IMAGE.PLAY}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('VideoShow', {
                                        url: bird
                                    })
                                }}
                                style={{ width: '33%', height: 170, borderRadius: 8, backgroundColor: "#d3d3d3", justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={IMAGE.BIRD}
                                    style={{ width: '100%', height: 170, borderRadius: 8 }}
                                />
                                <Image
                                    style={{ width: 35, height: 35, position: "absolute" }}
                                    source={IMAGE.PLAY}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 20, color: "#454545", fontWeight: 700 }}>
                            Trends Videos
                        </Text>
                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", marginTop: 15 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('VideoShow', {
                                        url: bird
                                    })
                                }}
                                style={{ width: '33%', height: 170, borderRadius: 8, backgroundColor: "#D3D3D3", justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={IMAGE.BIRD}
                                    style={{ width: '100%', height: 170, borderRadius: 8 }}
                                />
                                <Image
                                    style={{ width: 35, height: 35, position: "absolute" }}
                                    source={IMAGE.PLAY}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('VideoShow', {
                                        url: Bust
                                    })

                                }}
                                style={{ width: '33%', height: 170, borderRadius: 8, backgroundColor: "#D3D3D3", justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={IMAGE.BUST}
                                    style={{ width: '100%', height: 170, borderRadius: 8 }}
                                />
                                <Image
                                    style={{ width: 35, height: 35, position: "absolute" }}
                                    source={IMAGE.PLAY}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('VideoShow', {
                                        url: links_webm
                                    })
                                }}
                                style={{ width: '33%', height: 170, borderRadius: 8, backgroundColor: "#D3D3D3", justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={IMAGE.DEMO}
                                    style={{ width: '100%', height: 170, borderRadius: 8 }}
                                />
                                <Image
                                    style={{ width: 35, height: 35, position: "absolute" }}
                                    source={IMAGE.PLAY}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})