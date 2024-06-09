import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileInfoScreen } from "../views/profile/ProfileInfo";
import { OrderListScreen } from "../views/user/Order/OrderList";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();


export const UserTabsNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name="OrderListScreen" 
        component={OrderListScreen} 
        options={{
          title:'Orders',
          tabBarLabel: 'Orders',
          tabBarIcon:({color}) =>(
            <Image
              source={require('../../../assets/orders.png')}
              style={{width:25, height:25}}
            />
          )
        }}
        />
        <Tab.Screen 
        name="ProfileInfoScreen" 
        component={ProfileInfoScreen} 
        options={{
          title:'Perfil',
          tabBarLabel: 'Perfil',
          tabBarIcon:({color}) =>(
            <Image
              source={require('../../../assets/user_menu.png')}
              style={{width:25, height:25}}
            />
          )
        }}
        />
    </Tab.Navigator>
  )
}
