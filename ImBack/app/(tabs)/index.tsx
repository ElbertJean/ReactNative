import { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native';

const HomeScreen = () => {

  const [text, setText] = useState('Hello World');

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.text}>Hello World</Text>
        <TextInput 
          style={styles.textInput}
          value={text}
          onChangeText={setText}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scrollView: {
    flex: 1,
    backgroundColor: "#343A40",
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#343A40",
  },
  viewText: {
    height: 200,
    width: "80%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  text: {
    color: "#343A40",
    fontWeight: "bold",
  },
  textInput: {
    color: "#343A40",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default HomeScreen;
