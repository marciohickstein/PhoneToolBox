import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CustomButton({ title, onPress}) {
    
    function handlePress() {
        if (onPress)
            onPress();
    }
    
    return (
        <TouchableOpacity onPress={() => handlePress()} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title ? title : ''}</Text>
        </TouchableOpacity>
    )
}

