import { StyleSheet, View, Text, Button } from 'react-native';
import CustomButton from '../components/CustomButton';
import { isMobileDevice } from '../utils/Utils';
import * as LocalAuthentication from 'expo-local-authentication';
import { useState } from 'react';

let Location = null;

if (isMobileDevice()) {
    import('../screens/Location').then((module) => {
        Location = module.default;
    });
}

async function handleAuthentication() {
    try {
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticate with Face ID or Touch ID',
            fallbackLabel: 'Use Passcode',
            disableDeviceFallback: false,
            cancelLabel: 'Cancel',
        });
        setAuthResult(result);
    } catch (error) {
        console.log(error);
    }
}

export default function Home({ navigation }) {
    const [authResult, setAuthResult] = useState(null);
    return (
        <View style={styles.container}>
            <CustomButton title="Network" onPress={() => navigation.navigate("Network")} />
            {isMobileDevice() ? <CustomButton title="Location" onPress={() => navigation.navigate("Location")} /> : null}
            <CustomButton title="About" onPress={() => navigation.navigate("About")} />

            <CustomButton title="Autenticar com a biometria" onPress={handleAuthentication} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})
