import React, { useEffect } from 'react'
import { FlatList, Text, useWindowDimensions, View } from 'react-native'
import useViewModel from './ViewModel'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { MyColors } from '../../../../theme/AppTheme';
import { OrderListItem } from './Item';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrderStackParamList } from '../../../../navigator/OrderNavigator';

interface Props {
    status: string;
}

export const OrderListView = ({ status }: Props) => {

    const { address, getAddress } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<OrderStackParamList, 'OrderListScreen'>>()

    useEffect(() => {
        getAddress(status)
    }, [])

    return (
        <View>
            <FlatList
                data={address}
                keyExtractor={(item) => item.id!.toString()}
                renderItem={({ item }) =>
                    <OrderListItem order={item} navigation={navigation}/>
                }
            />
        </View>
    )
}


const renderScene = ({ route }: any) => {
    switch (route.key) {
        case 'first':
            return <OrderListView status='EN CAMINO' />
        case 'second':
            return <OrderListView status='EN PROCESO' />
        case 'third':
            return <OrderListView status='COMPLETADA' />
        default:
            return <OrderListView status='EN CAMINO' />
    }
}


export const OrderListScreen = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: 'EN CAMINO' },
        { key: 'second', title: 'EN PROCESO' },
        { key: 'third', title: 'COMPLETADA' }
    ])

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => (
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: '#c2c2c2', }}
                    activeColor='black'
                    inactiveColor='gray'
                    style={{ marginTop: 40, backgroundColor: 'white', height: 60, justifyContent: 'center' }}
                />
            )}
        />
    )
}
