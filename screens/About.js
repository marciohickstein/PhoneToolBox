import { View, StyleSheet, Text } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                This app was develop to help some things utils!
            </Text>
            <Text>
                Develop By Marcio de Matos Hickstein
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18
    }
})
