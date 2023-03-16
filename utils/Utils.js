import { Platform } from 'react-native';

function isMobileDevice() {
    return (["android", "ios"].includes(Platform.OS));
}

export { isMobileDevice };