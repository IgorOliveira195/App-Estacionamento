import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, ImageBackground, Image} from 'react-native'
import React, {useState}from 'react'
import Database from './Database'

const Cadastro = ({navigation}) => {

    const[nome, setNome] = useState('')
    const[setor, setSetor] = useState('')
    const[veiculo, setVeiculo] = useState('')
    const[marca, setMarca] = useState('')
    const[placa, setPlaca] = useState('')
    const[cor, setCor] = useState('')
    const[contato, setContato] = useState('')

    function addVeiculo(){
        if(nome == '' || setor == '' || veiculo == '' || marca == '' || placa == '' || cor == '' || contato == ''){
            Alert.alert(
                "Falha ao cadastrar veículo",
                "Por favor, preencha todos os campos!",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }else{
            Database.collection("Tasks").add({
                nome: nome.toUpperCase(),
                setor: setor.toUpperCase(),
                veiculo: veiculo.toUpperCase(),
                marca: marca.toUpperCase(),
                placa: placa.toUpperCase(), 
                cor: cor.toUpperCase(),
                contato: contato.toUpperCase()
            })
            navigation.navigate("O que deseja fazer ?")
        }
    }

  return (
    <ScrollView>
        <View style={styles.container}>
        <ImageBackground source={require('../img/tela2.jpg')} resizeMode='stretch' style={styles.background}>
        <Image source={require('../img/brasao.png')} style={styles.brasaoImage}/>
        <Text style={{fontSize: 10, color: '#fff', marginTop: 5, fontWeight:'bold'}}>TRIBUNAL DE CONTAS DO</Text>
        <Text style={{fontSize: 10, color: '#fff', marginBottom: 5, fontWeight:'bold'}}>ESTADO DO AMAZONAS</Text>
            <Text style={styles.textInput}>NOME DO FUNCIONÁRIO:</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Ex: Roberto da Silva Costa'
                placeholderTextColor={'#c1c1c1'}
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.textInput}>SETOR DO FUNCIONÁRIO:</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Ex: Administração'
                placeholderTextColor={'#c1c1c1'}
                value={setor}
                onChangeText={setSetor}
            />
            <Text style={styles.textInput}>VEÍCULO:</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Ex: Fiat Toro'
                placeholderTextColor={'#c1c1c1'}
                value={veiculo} 
                onChangeText={setVeiculo}
            />
            <Text style={styles.textInput}>MARCA DO VEÍCULO:</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Ex: Fiat'
                placeholderTextColor={'#c1c1c1'}
                value={marca}
                onChangeText={setMarca}
            />
            <Text style={styles.textInput}>PLACA DO VEÍCULO:</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Ex: LSN4149'
                placeholderTextColor={'#c1c1c1'}
                value={placa}
                onChangeText={setPlaca}
            />
            <Text style={styles.textInput}>COR DO VEÍCULO:</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Ex: Vermelho'
                placeholderTextColor={'#c1c1c1'}
                value={cor}
                onChangeText={setCor}
            />
            <Text style={styles.textInput}>RAMAL DO SETOR:</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Ex: 92994522112'
                placeholderTextColor={'#c1c1c1'}
                value={contato} 
                onChangeText={setContato}
            />
            <TouchableOpacity style={styles.buttonCadastrar} onPress={()=>{addVeiculo()}}>
                <Text style={styles.textButtonCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    </ScrollView>
  )
}

export default Cadastro

const styles = StyleSheet.create({
    container:{flex: 1},
    background:{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center',},
    brasaoImage:{ width: 80, height: 80},
    textInput:{ fontSize: 15, color: '#D8b211', fontWeight: 'bold', marginTop: 20, width: '90%', borderRadius: 10, padding: 10},
    input:{ width: '90%', marginTop: 10, marginBottom: 10, borderBottomWidth: 1, borderColor: '#901400', fontSize: 15,    color: '#fff', fontWeight: 'bold', paddingLeft: 15},
    buttonCadastrar:{ width: '90%', padding: 15,backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginBottom: 50, borderRadius: 50},
    textButtonCadastrar:{ color: 'red', fontSize: 20, fontWeight: 'bold'},
})