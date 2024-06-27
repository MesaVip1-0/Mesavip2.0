import { createNativeStackNavigator } from "@react-navigation/native-stack";


import DetailsCli from "../pages/Cliente/DetailsCli"
import Welcome from "../pages/Welcome";
import SignIn from "../pages/Cliente/Signin";
import SignInRest from "../pages/Restaurante/SignInRest";
import RegisterCli from "../pages/Cliente/RegisterCli";
import RegisterRest from "../pages/Restaurante/RegisterRest";
import Endereco from "../pages/Restaurante/RegisterRest/Endereco"
import TabRoutes from "./tab.routes";
import AlterDados from "../pages/Cliente/AlterDados";
import TermosUso from "../pages/Cliente/TermosUso";
import SuaReserva from "../pages/Cliente/SuaReserva";
import ReservaMesa from "../pages/Cliente/ReservaMesa";
import Cartoes from "../pages/Cliente/Cartoes";
import MesasDispo from "../pages/Cliente/MesasDispo";
import TabRoutesRest from "../routes/tab.routesRest";
import MesasCadastradas from "../pages/Restaurante/MesasCadastradas";
import EditMesas from "../pages/Restaurante/EditMesas";
import CadastroMesas from "../pages/Restaurante/CadastrarMesas";
import EditarReserva from "../pages/Cliente/EditarReserva"



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
                component={TabRoutesRest}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cartoes"
                component={Cartoes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MesasDispo"
                component={MesasDispo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CadastroMesas"
                component={CadastroMesas}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MesasCadastradas"
                component={MesasCadastradas}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EditMesas"
                component={EditMesas}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EditarReserva"
                component={EditarReserva}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}