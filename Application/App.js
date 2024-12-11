import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    'IBMPlexSansThai-Regular': require('./assets/fonts/IBMPlexSansThai-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View >
      <SafeAreaView>
        <Text style={{ fontFamily: 'IBMPlexSansThai-Regular' }}>สวัสดี จาก font IBM Plex Sans Thai</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}


