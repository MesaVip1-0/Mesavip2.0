import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import HomeCli from '../pages/HomeCli';
import Perfil from '../pages/Perfil';
import Favoritos from '../pages/Favoritos';
import Reserva from '../pages/Reserva';

const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName = 'home';

                    if (route.name === 'Início') {
                        iconName = 'home';
                    } else if (route.name === 'Favoritos') {
                        iconName = 'heart';
                    } else if (route.name === 'Reservas') {
                        iconName = 'book';
                    } else if (route.name === 'Perfil') {
                        iconName = 'user';
                    }

                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#fe0000',
                tabBarInactiveTintColor: '#000',
                tabBarLabelStyle: {
                    paddingBottom: 5,
                    fontSize: 12,
                },
                tabBarStyle: {
                    backgroundColor: '#d9d9d9',
                    height: 55,
                    paddingTop: 10,
                },
            })}
        >
            <Tab.Screen name="Início" component={HomeCli} />
            <Tab.Screen name="Favoritos" component={Favoritos} />
            <Tab.Screen name="Reservas" component={Reserva} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
}

export default TabRoutes;
