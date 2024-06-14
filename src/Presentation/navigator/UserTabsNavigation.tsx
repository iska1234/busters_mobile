import { ProfileInfoScreen } from "../views/profile/info/ProfileInfo";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyColors } from '../theme/AppTheme';
import { OrderStackNavigator } from "./OrderNavigator";


const Tab = createBottomTabNavigator();


export const UserTabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 11 },
        tabBarActiveTintColor: MyColors.tertiary,
      }}

    >
      <Tab.Screen
        name="OrderStackNavigator"
        component={OrderStackNavigator}
        options={{
          headerShown:false,
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/orders.png')}
              style={{ width: 25, height: 25 }}
            />
          )
        }}
      />
      {/* <Tab.Screen
        name="ClientAddressMapScreen"
        component={ClientAddressMapScreen}
        options={{
          title: 'Address',
          tabBarLabel: 'Address',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/orders.png')}
              style={{ width: 25, height: 25 }}
            />
          )
        }}
      /> */}
      <Tab.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
        options={{
          title: 'Perfil',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/user_menu.png')}
              style={{ width: 25, height: 25 }}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}
