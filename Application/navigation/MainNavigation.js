import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import SelectLoginScreen from '../screens/SelectLoginScreen';
import MemberLoginScreen from '../screens/MemberLoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import SignUpScreen2 from '../screens/SignupScreen';
import SignUpSuccess from '../screens/SignupScreen';
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

      <Stack.Screen name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="SignUpStep2"
        component={SignUpScreen2}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="SignUpSuccess"
        component={SignUpSuccess}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
