import React, { ComponentPropsWithoutRef } from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle, StyleProp } from 'react-native';

type ButtonProps = {
    label: string,
    styleOptional?: StyleProp<ViewStyle>;
    onPress?: () => void;
    button?: Omit<ComponentPropsWithoutRef<typeof TouchableOpacity>, 'onPress'>;
}

const Button = (props: ButtonProps) => {
    const { label, styleOptional, onPress, button } = props;

    return (
        <TouchableOpacity 
            style={[styles.button, styleOptional]} 
            onPress={onPress} 
            {...button}>
                <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "#242424",
        marginHorizontal: 120,
        marginTop: 20,
        paddingVertical: 8,
        backgroundColor: "#242424",
        borderRadius: 4,
        width: '50%',
    },
    textButton: {
        textAlign: 'center',
        color: '#D1D9DC',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
