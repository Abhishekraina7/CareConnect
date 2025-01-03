import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Logo from '../../components/logo';
import Input from '../../components/signScreenComponents/input'
import Button from '../../components/Button';
import { router } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

/*

This is the Patient sign-in screen please handle back-end keeping this in mind because copy of this same code is used for Nurse sign-in


*/



export default function LoginScreen() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login attempted with:', { id, password });
        router.push('/(screens)/patientScreen')
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here 

        // change this proper logic
        router.push('/(screens)/forgotPasswordScreen')
        console.log('Forgot password pressed');
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Icon name="chevron-left" size={20} color="#007E7E" style={{ marginRight: 10 }} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.content}>
                <Logo />
                <Text style={styles.title}>CareConnect</Text>
                <Text style={styles.subtitle}>Login in with your credentials</Text>
                <View style={styles.form}>
                    <Input
                        placeholder="Employee ID / Patient ID"
                        value={id}
                        onChangeText={setId}
                    />
                    <Input
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        onPress={handleForgotPassword}
                        style={styles.forgotPassword}
                    >
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Button title="Continue" onPress={handleLogin} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    backText: {
        marginLeft: 5,
        fontSize: 16,
        color: '#007E7E',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginBottom: 32,
    },
    form: {
        width: '100%',
        marginTop: 16,
    },
    forgotPassword: {
        marginTop: 15,
        marginBottom: 32,
        alignItems: 'center'
    },
    forgotPasswordText: {
        color: '#666',
        fontSize: 14,
    },
    footer: {
        position: 'absolute',
        bottom: 32,
        left: 24,
        right: 24,
    },
});

