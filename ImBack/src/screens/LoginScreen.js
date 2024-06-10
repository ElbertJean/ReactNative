import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    ScrollView,
} from 'react-native';

import LogoNerd from '../assets/LogoNerd.png';
import AppTeste from '../assets/AppTeste.png';

const LoginScreen = () => {

    const [offSet] = useState(new Animated.ValueXY({x: 0, y:100}));
    
    useEffect(() =>{
        Animated.spring(offSet.y, {
            toValue: 0,
            speed:0.1,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewImage}>
                <Image source={LogoNerd} style={styles.image} />
            </View>
            <View style={styles.viewImage}>
                <Image source={AppTeste} style={styles.imageText} />
            </View>

            <Animated.View 
                style={[
                    styles.containerInput,
                    {
                        transform:[
                            { translateY: offSet.y}
                        ]    
                    }
                ]}>
                <TextInput
                    placeholder="Digite o seu e-mail"
                    placeholderTextColor="#C4C4C4"
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Digite a sua senha"
                    placeholderTextColor="#C4C4C4"
                    style={styles.textInput}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </Animated.View>
            <View style={{ justifyContent:'flex-end', flex:1, marginBottom:50 }}>
                <Text style={styles.textFooter}>Esqueci minha senha</Text>
                <Text style={styles.textFooter}>Ainda não possui conta? Cadastre-se</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "#2C9050",
    },
    imageText: {
        width: '70%',
        height: 100,
    },
    viewImage: {
        alignItems: 'center',
    },
    image: {
        width: '30%',
        height: 100,
        marginTop: 50,
    },
    containerInput:{
        marginTop:70,
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#242424",
        marginHorizontal: 20,
        paddingVertical: 6,
        paddingLeft: 10,
        borderRadius: 10,
        marginTop: 20,
        fontWeight: '600',
        fontSize: 16,
        color: "#F4F4F4",
        letterSpacing: 1,
        width: '80%',
    },
    button: {
        borderWidth: 1,
        borderColor: "#242424",
        marginHorizontal: 120,
        marginTop: 20,
        paddingVertical: 8,
        backgroundColor: "#242424",
        borderRadius: 10,
        width: '50%',
    },
    textButton: {
        textAlign: 'center',
        color: '#D1D9DC',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textFooter: {
        marginTop: 15,
        textAlign: 'center',
        color: '#D1D9DC',
        fontWeight: '600',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;