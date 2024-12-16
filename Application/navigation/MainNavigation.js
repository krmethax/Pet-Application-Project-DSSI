import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import SelectLoginScreen from '../screens/SelectLoginScreen';
import MemberLoginScreen from '../screens/MemberLoginScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="OnBoardingScreen">
      <Stack.Screen 
        name="OnBoardingScreen" 
        component={OnBoardingScreen} 
        options={{ headerShown: false }} 
      />
      {/* เพิ่มหน้าอื่นๆ ที่ต้องการที่นี่ */}
      <Stack.Screen name="SelectLogin" 
      component={SelectLoginScreen}
      options={{ headerShown: false }} 
      />

      <Stack.Screen name="MemberLogin" 
      component={MemberLoginScreen}
      options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}
