import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
} from 'react-native';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import InputText from '../../components/InputText/InputText.component';
import Button from '../../components/Button/Button.component';

import LogoNerd from '../../assets/LogoNerd.png';
import AppTeste from '../../assets/bertApp.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {

    const navigation: any = useNavigation();

    const [offSet] = useState(new Animated.ValueXY({ x: 0, y: 100 }));

    useEffect(() => {
        Animated.spring(offSet.y, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewImage}>
                <Image source={LogoNerd} style={styles.imageLogo} />
                <Image source={AppTeste} style={styles.imageText} />
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
                <InputText placeholder='Digite o seu e-mail' onChange={(e) => console.log('email', e)} />
                <InputText placeholder='Digite a sua senha' secureTextEntry onChange={(e) => console.log('senha', e)} />
                <Button label='Entrar'/>
            </Animated.View>
            <View style={styles.viewFooter}>
                <Text style={styles.textFooter} onPress={() => navigation.navigate('ForgotPassword')}>
                    Esqueci minha senha
                </Text>
                <Text style={styles.textFooter} onPress={() => navigation.navigate('Register')}>
                    Ainda não possui conta? Cadastre-se
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
    imageText: {
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

export default LoginScreen;
