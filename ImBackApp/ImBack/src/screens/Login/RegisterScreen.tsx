import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
} from 'react-native';
import axios from 'axios';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import InputText from '../../components/InputText/InputText.component';
import Button from '../../components/Button/Button.component';

import LogoNerd from '../../assets/LogoNerd.png';
import RegisterImage from '../../assets/registerImage.png';

const RegisterScreen = () => {
    const navigation: any = useNavigation();

    const [offSet] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        Animated.spring(offSet.y, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/register', {
                nome,
                email,
                senha
            });
            console.log(response.data.message);
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
        }
    };

    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewImage}>
                <Image source={LogoNerd} style={styles.imageLogo} />
                <Image source={RegisterImage} style={styles.imageRegister} />
            </View>
            <Animated.View
                style={[
                    styles.containerInput,
                    {
                        transform: [
                            { translateY: offSet.y }
                        ]
                    }
                ]}>
                <InputText placeholder='Digite o seu nome' onChange={(text) => setNome(text)} />
                <InputText placeholder='Digite o seu e-mail' onChange={(text) => setEmail(text)} />
                <InputText placeholder='Digite a sua senha' secureTextEntry onChange={(text) => setSenha(text)} />
                <Button label='Registrar' onPress={handleRegister} />
            </Animated.View>
            <View style={styles.viewFooter}>
                <Text style={styles.textFooter} onPress={() => navigation.navigate('Home')}>
                    Já possui conta? Fazer login
                </Text>
                <Text style={styles.textFooter} onPress={() => navigation.navigate('ForgotPassword')}>
                    Esqueci minha senha
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "#2C9050",
    },
    viewImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    imageLogo: {
        width: '100%',
        height: 150,
        resizeMode: 'contain'
    },
    imageRegister: {
        width: '100%',
        height: 50,
        resizeMode: 'contain'
    },
    containerInput: {
        flex: 1,
        alignItems: 'center',
    },
    viewFooter: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10,
        paddingVertical: 20,
    },
    textFooter: {
        textAlign: 'center',
        color: '#D1D9DC',
        fontWeight: '600',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default RegisterScreen;
