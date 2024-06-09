import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './src/Presentation/views/home/Home';
import { ProfileInfoScreen } from './src/Presentation/views/profile/ProfileInfo';
import { UserTabsNavigation } from './src/Presentation/navigator/UserTabsNavigation';

export type RootStackParamList = {
    HomeScreen: undefined,
    UserTabsNavigation: undefined,

}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ title: 'Welcome' }}
                />

                <Stack.Screen
                    name="UserTabsNavigation"
                    component={UserTabsNavigation}

                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App