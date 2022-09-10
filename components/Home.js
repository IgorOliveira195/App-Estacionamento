import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../img/telaprincipal.png')} resizeMode='cover' style={styles.background}>
        <Text style={{fontSize: 15, color: '#fff', marginTop: 140, fontWeight:'bold'}}>TRIBUNAL DE CONTAS DO</Text>
        <Text style={{fontSize: 15, color: '#fff', marginBottom: 100, fontWeight:'bold'}}>ESTADO DO AMAZONAS</Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Cadastro de novo perfil')}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Informe a placa do veículo')}>
                <Text style={styles.textButton}>Pesquisar</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{ flex: 1},
    background:{ flex: 1, width: '100%', alignItems: 'center'},
    button:{ padding: 20, backgroundColor: '#fff', width: '90%', alignItems: 'center', marginBottom: 15, borderRadius: 50},
    textButton:{ color: 'red', fontSize: 20, fontWeight: 'bold'}
})