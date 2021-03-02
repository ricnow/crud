import { NavigationHelpersContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function FormApp() {
    const {descricao, setDescricao} = useState();
    const {quantidade, setQuantidade} = useState();
    function handlerDescriptionChange(descricao){setDescricao(descricao);}
    function handlerQuantityChange(quantidade){setQuantidade(quantidade);}
    function handlerButtonPress(){
        console.log({id: new Date().getTime(), descricao, quantidade});
        Navigation.navigate("AppList");
    }    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Item para comprar</Text>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={handlerDescriptionChange}
                placeholder="O Que está faltando em casa?"
                clearButtonMode="always"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder="Digite a quantidade"
                onChangeText={handlerQuantityChange}
                keyboardType="numeric"
                clearButtonMode="always"
            ></TextInput>
            <TouchableOpacity style={styles.button} onPress={handlerButtonPress}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
      color: "#fff",
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 40,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

