import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import InputText from '../../components/InputText/InputText.component';
import Button from '../../components/Button/Button.component';

import LogoNerd from '../../assets/LogoNerd.png';
import forgotPassword from '../../assets/forgotPasswordImage.png';

const ForgotPassword = () => {

    const navigation: any = useNavigation();

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
                <Image source={LogoNerd} style={styles.imageLogo} />
                <Image source={forgotPassword} style={styles.imageForgotPassword} />
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
                <InputText placeholder='Digite o seu e-mail' onChange={(e) => console.log('email', e)}/>
                <Button label='Recuperar'/>
            </Animated.View>
            <View style={styles.viewFooter}>
                <Text style={styles.textFooter} onPress={() => navigation.navigate('Home')}>Já possui conta? Fazer login</Text>
                <Text style={styles.textFooter} onPress={() => navigation.navigate('Register')}>Ainda não possui conta? Cadastre-se</Text>
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
        flex:1 ,
        alignItems: 'center',
        justifyContent:'center',
        gap: 20
    },
    imageLogo: {
        width: '100%',
        height: 150,
        resizeMode: 'contain'
    },
    imageForgotPassword: {
        width: '100%',
        height: 40,
        resizeMode: 'contain'
    },
    containerInput:{
        flex: 1,
        alignItems: 'center',
    },
    viewFooter: {
        flex: 0,
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

export default ForgotPassword;