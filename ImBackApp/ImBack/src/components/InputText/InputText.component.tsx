import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

type InputTextProps = {
    placeholder: string,
    onChange?: (e: any) => void,
    input?: Omit<TextInputProps, "onChange" | "maxLength">;
    secureTextEntry?: boolean;
}

const InputText = (props: InputTextProps) => {
    const { placeholder, onChange, input, secureTextEntry } = props;

    const handleChange = (e: any) => {
        onChange && onChange(e);
    };

    return (
        <>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#C4C4C4"
                style={styles.textInput}
                onChangeText={handleChange}
                {...input}
                secureTextEntry={secureTextEntry}
                
            />
        </>
    );
}

export default InputText;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#242424",
        marginHorizontal: 20,
        paddingVertical: 6,
        paddingLeft: 10,
        borderRadius: 4,
        marginTop: 20,
        fontWeight: '600',
        fontSize: 16,
        color: "#F4F4F4",
        letterSpacing: 1,
        width: '90%',
        height: 40
    },
});
