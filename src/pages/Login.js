import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';

function Login() {

    return (
        <View style={styles.container}>
            <View style={styles.headBackground} />
            <KeyboardAvoidingView>
                <View>
                    <Text style={styles.logo}>UDAC</Text>
                    <Text style={styles.logoDescription}>Property & Tax Survey</Text>
                </View>
                <ScrollView>
                    <View style={styles.loginArea}>
                        <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
                        <Text style={styles.loginAreaDescription}>
                            Unique Door No Easily Fill Your Entire Property Tax Using App
                        </Text>
                        <LoginForm />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingVertical: 80
    },
    headBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 250,
        width: '100%',
        backgroundColor: '#1572de'
    },
    logo: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f2f2f2'
    },
    logoDescription: {
        textAlign: 'center',
        color: '#f2f2f2'
    },
    loginArea: {
        marginHorizontal: 40,
        marginVertical: 40,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,

        elevation: 20,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 }

    }, loginAreaTitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    loginAreaDescription: {
        fontSize: 11,
        color: '#7e868f',
        marginVertical: 10,
        textAlign: 'center'
    }
});

export default Login;
