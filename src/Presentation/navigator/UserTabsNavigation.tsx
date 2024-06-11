import { ProfileInfoScreen } from "../views/profile/info/ProfileInfo";
import { OrderListScreen } from "../views/user/Order/OrderList";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyColors } from '../theme/AppTheme';

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
        name="OrderListScreen"
        component={OrderListScreen}
        options={{
          title: 'Orders',
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/orders.png')}
              style={{ width: 25, height: 25 }}
            />
          )
        }}
      />
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
