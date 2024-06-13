import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login/LoginScreen';
import ForgotPassword from '../screens/Login/ForgotPassword';
import Register from '../screens/Login/RegisterScreen';


const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen 
          component={LoginScreen} 
          name="Home" 
          options={{ headerShown: false,
            headerStyle: {
              backgroundColor: '#2C9050',
            },
           }} 
        />
        <Stack.Screen 
          component={ForgotPassword} 
          name="ForgotPassword" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
        component={Register} 
        name="Register" 
        options={{ headerShown: false }} 
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
