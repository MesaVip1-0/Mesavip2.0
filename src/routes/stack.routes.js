import { createNativeStackNavigator } from "@react-navigation/native-stack";


import DetailsCli from "../pages/DetailsCli"
import Welcome from "../pages/Welcome";
import SignIn from "../pages/Signin";
import SignInRest from "../pages/SignInRest";
import RegisterCli from "../pages/RegisterCli";
import RegisterRest from "../pages/RegisterRest";
import Endereco from "../pages/RegisterRest/Endereco"
import TabRoutes from "./tab.routes";
import AlterDados from "../pages/AlterDados";
import TermosUso from "../pages/TermosUso";
import SuaReserva from "../pages/SuaReserva";
import ReservaMesa from "../pages/ReservaMesa";
import HomeRest from "../pages/HomeRest";
import Cartoes from "../pages/Cartoes";


const Stack = createNativeStackNavigator();


export default function StackRoutes() {
    return (
        <Stack.Navigator>



            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignInRest"
                component={SignInRest}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="RegisterCli"
                component={RegisterCli}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="RegisterRest"
                component={RegisterRest}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="HomeCli"
                component={TabRoutes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Endereco"
                component={Endereco}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DetailsCli"
                component={DetailsCli}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="AlterDados"
                component={AlterDados}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TermosUso"
                component={TermosUso}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SuaReserva"
                component={SuaReserva}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ReservaMesa"
                component={ReservaMesa}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeRest"
                component={HomeRest}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cartoes"
                component={Cartoes}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}