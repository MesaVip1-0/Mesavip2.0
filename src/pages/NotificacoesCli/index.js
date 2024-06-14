import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function NotificacoesCli() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#141414' }}>
            <View style={styles.container}>
                <Text style={{ color: '#fff', fontSize: 26.5 }}>Notificações</Text>
            </View>
            <SafeAreaView>
                <View>
                    
                </View>
            </SafeAreaView>
        </SafeAreaView>
    );
}

