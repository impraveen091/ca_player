import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Video from 'react-native-video';
import * as IMAGE from '../resources/images/index'
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';
import { about_us } from '../common/test';
import ytdl from 'react-native-ytdl';

export default function VideoShow(props) {

    const [videoUrl, setVideoUrl] = useState(null);
    //let heights = Dimensions.get('window').height / 2
    //let widhts = Dimensions.get('window').width

    //state manager
    const [videoLoad, setVideoLoad] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [paused, setPaused] = useState(false);
    const [progress, setProgress] = useState(null)
    const [slideProg, setSlideProg] = useState()
    const [fullScreen, setFullScreen] = useState(false)
    const ref = useRef();

    useEffect(() => {
        const getVideoUrl = async () => {
            let urls = props.route.params.url
            try {
                const url = await ytdl(urls);
                url.map((item) => {
                    console.log('Url--1234', item.url);
                    setVideoUrl(item.url);
                })
            } catch (error) {
                setVideoUrl(urls);
            }
        };
        getVideoUrl();
    }, []);

    const fromate = (second) => {
        let min = parseInt(second / 60).toString().padStart(2, '0');
        let secs = (Math.trunc(second) % 60).toString().padStart(2, '0');
        return `${min}:${secs}`;
    }

    const onLoad = () => {
        setVideoLoad(false)
    };

    const onBuffer = () => {
        setVideoLoad(false)
        console.log('onBuffer')
    };
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            {
                fullScreen == false && (
                    <TouchableOpacity
                        onPress={() => { props.navigation.navigate('Home_S') }}
                        style={{ padding: 10, flexDirection: "row", alignItems: "center", backgroundColor: "white", elevation: 5 }}>
                        <Image
                            style={{ width: 20, height: 20, tintColor: "black" }}
                            source={IMAGE.BACK_B}
                        />
                        <Text style={{ color: "black", fontSize: 20, marginLeft: 5 }}>Back</Text>

                    </TouchableOpacity>
                )
            }

            <View>
                <TouchableOpacity
                    onPress={() => {
                        setClicked(true)
                    }}
                    style={{ width: '100%', height: fullScreen ? '100%' : 200, }}
                >
                    <Video
                        onError={(x) => {
                            console.log('error', x)
                        }}
                        onLoadStart={(x) => {
                            // console.log('xxxx', x)
                        }}
                        ref={ref}
                        onProgress={(x) => {
                            setProgress(x)
                        }}
                        paused={paused}
                        onLoad={() => { onLoad() }}
                        onBuffer={() => { onBuffer() }}
                        resizeMode='contain'
                        style={{ width: '100%', height: fullScreen ? '100%' : 200, backgroundColor: "white", }}
                        source={{ uri: videoUrl }}
                    />
                    {
                        clicked && (
                            <TouchableOpacity
                                style={{
                                    width: '100%', height: fullScreen ? '100%' : 200, position: 'absolute', backgroundColor: "rgba(0, 0, 0, 0.378)", alignItems: "center", justifyContent: "center"
                                }}
                            >
                                <View style={{ flexDirection: "row", justifyContent: 'space-evenly', width: "100%", alignItems: "center" }}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            ref.current.seek(parseInt(progress.currentTime) - 10)
                                        }}
                                    >
                                        <Image
                                            style={{ width: 30, height: 30, tintColor: "white" }}
                                            source={IMAGE.BACK}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setPaused(!paused)
                                            setClicked(false)
                                        }}
                                    >
                                        <Image
                                            style={{ width: 40, height: 40, tintColor: "white" }}
                                            source={paused ? IMAGE.PLAY : IMAGE.PAUSE}
                                        />
                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        onPress={() => {
                                            ref.current.seek(parseInt(progress.currentTime) + 10)
                                        }}
                                    >
                                        <Image
                                            style={{ width: 30, height: 30, tintColor: "white" }}
                                            source={IMAGE.FORWARD}
                                        />
                                    </TouchableOpacity>

                                </View>
                                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", position: "absolute", bottom: 0, paddingLeft: 15, paddingRight: 15, alignItems: "center" }}>
                                    <Text style={{ color: "white", }}>{fromate(progress.currentTime)}</Text>
                                    <Slider
                                        value={slideProg}
                                        style={{ width: '80%', height: 40 }}
                                        minimumValue={0}
                                        maximumValue={progress.seekableDuration}
                                        minimumTrackTintColor="#FFFFFF"
                                        maximumTrackTintColor="#FFFFFF"
                                        onValueChange={(x) => {
                                            setSlideProg(ref.current.seek(x))
                                        }}

                                    />
                                    <Text style={{ color: "white" }}>{fromate(progress.seekableDuration)}</Text>
                                </View>
                                <View style={{ flexDirection: "row", position: "absolute", top: 0, justifyContent: "flex-start", width: "100%", padding: 10 }}>
                                    <TouchableOpacity onPress={() => {
                                        if (fullScreen) {
                                            Orientation.lockToPortrait()
                                        } else {
                                            Orientation.lockToLandscape()
                                        }
                                        setFullScreen(!fullScreen)
                                    }}>
                                        <Image
                                            style={{ width: 20, height: 20, tintColor: "white" }}
                                            source={IMAGE.FULL_SCREEN}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                </TouchableOpacity>
                {
                    videoLoad && (
                        <View style={{ width: "100%", height: "100%", position: "absolute", zIndex: 2000, justifyContent: "center", alignItems: "center", backgroundColor: "#d3d3d3" }}>
                            <ActivityIndicator
                                size='large'
                                color='black'
                            />
                        </View>
                    )
                }
            </View>

            {
                fullScreen == false && (
                    <View style={{ width: '100%', height: '100%', padding: 5, backgroundColor: "black" }}>
                        <View>
                            <Text style={{ fontSize: 19, color: "white", marginTop: 5 }}>
                                Building Business from Scratch | Launche The Bussiness
                            </Text>
                            <Text style={{ color: "#d3d3d37d", marginTop: 5, fontSize: 13 }}>
                                475k view in 5 month
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: "center" }}>
                            <Image
                                style={{ width: 26, height: 26 }}
                                source={IMAGE.USER}
                            />
                            <Text style={{ color: "white", marginLeft: 5, fontSize: 16 }}>
                                CA Player
                            </Text>
                            <Text style={{ color: "#d3d3d37d", marginLeft: 15, fontSize: 12 }}>
                                16 M
                            </Text>
                        </View>
                        <View
                            style={{ width: '100%', borderWidth: 0.4, borderColor: "#d3d3d345", marginTop: 10 }}
                        />
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ color: "white", fontSize: 16 }}>
                                About Video
                            </Text>
                            <Text style={{ fontSize: 12, color: "#d3d3d3", marginTop: 5, textAlign: 'justify', alignSelf: "center", lineHeight: 18 }}>
                                {about_us}
                            </Text>
                        </View>

                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({})