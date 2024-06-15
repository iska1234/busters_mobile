import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './src/Presentation/views/home/Home';
import { ProfileInfoScreen } from './src/Presentation/views/profile/info/ProfileInfo';
import { UserTabsNavigation } from './src/Presentation/navigator/UserTabsNavigation';
import { ProfileUpdateScreen } from './src/Presentation/views/profile/update/ProfileUpdate';
import { User } from './src/Domain/entities/User';
import { UserProvider } from './src/Presentation/context/UserContext';


export type RootStackParamList = {
    HomeScreen: undefined,
    UserTabsNavigation: undefined,
    ProfileUpdateScreen: { user: User },
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <UserState>
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
                    <Stack.Screen
                        name="ProfileUpdateScreen"
                        component={ProfileUpdateScreen}
                        options={{
                            headerShown: true,
                            title: 'Update User'
                        }}
                    />
                </Stack.Navigator>
            </UserState>
        </NavigationContainer>
    )

}

const UserState = ({ children }: any) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}


export default App