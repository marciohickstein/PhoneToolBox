import { View, Text, Button } from "react-native";
import { useState } from 'react';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";
import MapView, { Marker } from "react-native-maps";
import CustomButton from '../components/CustomButton'

const INITIAL_LATITUDE = -30.0062;
const INITIAL_LONGITUDE = -51.1468;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

function Location() {
    const [region, setRegion] = useState({
        latitude: INITIAL_LATITUDE,
        longitude: INITIAL_LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });
    
    const [marker, setMarker] = useState({ 
        latitude: INITIAL_LATITUDE, 
        longitude: INITIAL_LONGITUDE
    });

    async function getMyLocation() {
        console.log('getting permissions...');

        const granted = await requestForegroundPermissionsAsync();

        if (granted) {
            console.log('getting current position...');

            const location = await getCurrentPositionAsync();

            if (location) {
                const currentRegion = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }
                setRegion(currentRegion);

                console.log('Current region', location);

                const currentMarker = { 
                    latitude: location.coords.latitude, 
                    longitude: location.coords.longitude 
                };
                setMarker(currentMarker);

                console.log('Current marker', location);
            }
        }
    }


    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <MapView
                style={{ width: "100%", height: "90%" }}
                region={region}
            >
                <Marker
                    coordinate={marker}
                />
            </MapView>
            <CustomButton title="Get My Current Location" onPress={() => getMyLocation()} />
        </View>
    )
}

export default Location;