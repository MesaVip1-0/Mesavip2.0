import React, { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Keyboard } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import HomeRest from '../pages/Restaurante/HomeRest';
import Configuracoes from '../pages/Restaurante/Configuracoes';
import CadastroMesas from '../pages/Restaurante/CadastrarMesas';
import Reservas from '../pages/Restaurante/Reservas';


const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');
const tabWidth = width / 4; // Assuming there are 4 tabs, adjust if needed
const indicatorWidth = tabWidth - 20; // Adjust as needed for indicator width

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const translateX = useSharedValue(0);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const indicatorStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    const handleTabPress = (routeName, index) => {
        translateX.value = withTiming(index * tabWidth, { duration: 300, easing: Easing.inOut(Easing.ease) });
        navigation.navigate(routeName);
    };

    if (isKeyboardVisible) {
        return null;
    }


    return (
        <View style={styles.tabBarContainer}>
            <Animated.View style={[styles.indicator, indicatorStyle]} />
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    handleTabPress(route.name, index);
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const color = isFocused ? '#fe0000' : '#000';
                let iconName = 'home';

                if (route.name === 'Início') {
                    iconName = 'home';
                } else if (route.name === 'CadMesas') {
                    iconName = 'newspaper-o';
                } else if (route.name === 'Reservas') {
                    iconName = 'book';
                } else if (route.name === 'Config') {
                    iconName = 'gear';
                }

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabButton}
                        key={route.key}
                    >
                        <FontAwesome name={iconName} size={25} color={color} />
                        <Text style={{ color }}>{options.title || route.name}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Início" component={HomeRest} />
            <Tab.Screen name="CadMesas" component={CadastroMesas} />
            <Tab.Screen name="Reservas" component={Reservas} />
            <Tab.Screen name="Config" component={Configuracoes} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        backgroundColor: '#d9d9d9',
        height: 55,
        paddingTop: 10,
        position: 'relative',
    },
    indicator: {
        height: 5,
        width: indicatorWidth, // Adjust width of indicator
        backgroundColor: '#fe0000',
        position: 'absolute',
        top: 0,
        left: (tabWidth - indicatorWidth) / 2, // Center the indicator
        borderBottomLeftRadius: 5, // Adjust border radius as needed
        borderBottomRightRadius: 5,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
    },
});

export default TabRoutes;
