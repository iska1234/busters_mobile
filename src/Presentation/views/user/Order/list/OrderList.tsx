import React, { useEffect, useState } from 'react'
import { Button, FlatList, Image, RefreshControl, ScrollView, Text, useWindowDimensions, View } from 'react-native'
import useViewModel from './ViewModel'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { MyColors } from '../../../../theme/AppTheme';
import { OrderListItem } from './Item';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrderStackParamList } from '../../../../navigator/OrderNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    status: string;
}

export const OrderListView = ({ status }: Props) => {

    const { ordersOnTheWay, ordersInProgress, ordersCompleted, getOrders } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<OrderStackParamList, 'OrderListScreen'>>()
    const { top } = useSafeAreaInsets();
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        getOrders(status)
    }, [])

    const onRefresh = () => {
        setIsRefreshing(true);
        getOrders(status);
        setTimeout(() => {
            setIsRefreshing(false)
        }, 2000);
    }



    const handleButtonPress = () => {
        onRefresh();
    }

    return (
        <View style={{ flex: 1 }}>
            <Button title="Refresh List" onPress={handleButtonPress} />
            <FlatList
                data={
                    status === 'EN CAMINO'
                        ? ordersOnTheWay
                        : status === 'EN PROCESO'
                            ? ordersInProgress
                            : status === 'COMPLETADA'
                                ? ordersCompleted
                                : []
                }
                keyExtractor={(item) => item.id!.toString()}
                renderItem={({ item }) =>
                    <OrderListItem order={item} navigation={navigation} />
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
        { key: 'first', title: 'ON THE WAY' },
        { key: 'second', title: 'IN PROGRESS' },
        { key: 'third', title: 'COMPLETED' }
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
