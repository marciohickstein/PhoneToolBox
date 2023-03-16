import { StyleSheet, View, Text, Button } from 'react-native';
import CustomButton from '../components/CustomButton';
import { isMobileDevice } from '../utils/Utils';

let Location = null;

if (isMobileDevice())
{
    import('../screens/Location').then((module) => {
      Location = module.default;
    });
}

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <CustomButton title="Network" onPress={() => navigation.navigate("Network")} />
            {isMobileDevice() ? <CustomButton title="Location" onPress={() => navigation.navigate("Location")} /> : null}
            <CustomButton title="About" onPress={() => navigation.navigate("About")} />
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
