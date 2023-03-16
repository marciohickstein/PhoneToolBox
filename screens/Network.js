import { View, Text, Button } from 'react-native';
import * as ExpoNetwork from 'expo-network';
import { useEffect, useState } from 'react';

export default function Network({navigation}) {
    const [address, setAddress] = useState(null)
    const [state, setState] = useState(null);

    useEffect(() => {
        (
            async () => {
                const address = await ExpoNetwork.getIpAddressAsync();
                setAddress(address);
                const networkState = await ExpoNetwork.getNetworkStateAsync();
                setState(networkState);
            }
        )()
    }, [])

    return (
        <View style={{ 
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <Text>Connected: {state?.isConnected ? "YES" : "NO"}</Text>
            <Text>Type Connection: {state?.type}</Text>
            <Text>Internet Reachable: {state?.isInternetReachable ? "YES" : "NO"}</Text>
            <Text>My address: {address}</Text>
        </View>
    )
}
