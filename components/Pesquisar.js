import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView, Alert} from 'react-native'
import React, { useState, useEffect } from 'react'
import Database from './Database'
import IconDelete from 'react-native-vector-icons/MaterialCommunityIcons'
import IconPesquisa from 'react-native-vector-icons/Fontisto'
import Loading  from './Loading'


const Pesquisar = () => {

  const [task, setTask] = useState([])
  const [listaData, setListaData] = useState([])
  const [ loading, setLoading] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      Database.collection("Tasks").onSnapshot((query)=>{
        const list = []
        query.forEach((doc)=> {
          list.push({...doc.data(), id:doc.id})
        })
        setLoading(true)
        setListaData(list)
        setTask(list)
      })
    }, 2000)     
  }, [])

  function deleteTask(id){
    Alert.alert(
      'Deletar perfil do servidor',
      'Deseja realmente deletar o perfil do servidor ?',
      [
        {
          text: 'Sim',
          onPress:()=>{
            Database.collection("Tasks").doc(id).delete()
          }
        },
        {
          text: 'Não',
          onPress:()=>{
           console.log('Botão não pressionado')
          }
        }
      ]
    )
  }

  function buscar(perfil){
      let lista = JSON.parse(JSON.stringify(listaData))
      setTask(lista.filter(item => item.placa.toUpperCase().includes(perfil.toUpperCase())))
    }

  return (
      <View style={styles.container}>
        <ImageBackground source={require('../img/tela3.png')} style={styles.background}>
            <View style={styles.containerCampoPesquisa}>
              <TextInput 
              style={styles.campoPesquisa}
              placeholder='Ex: BRAOS17 '
              onChangeText={buscar}
              maxLength = {7}
              />
              <IconPesquisa name="search" size={25} color="#c1c1c1" style={{position: 'absolute', left: 20, top: 20}}/>
            </View> 
            <ScrollView>
              {task.length ? (
                <>
                  {task.map((item) =>(
                    <View style={styles.listContainer}>
                      <View style={styles.perfil}>
                        <TouchableOpacity style={styles.buttonDelete} onPress={()=>{deleteTask(item.id)}}>
                          <IconDelete name="delete" size={25} color="#D32929"/>
                        </TouchableOpacity>
                        <View style={styles.containerInfo}>
                          <Text style={styles.info}>NOME DO FUNCIONÁRIO:</Text>
                          <Text style={styles.listInfo} key={item.id}>{item.nome}</Text>
                        </View>
                        <View style={styles.containerInfo}>
                          <Text style={styles.info}>NOME DO SETOR:</Text>
                          <Text style={styles.listInfo} key={item.id}>{item.setor}</Text>
                        </View>
                        <View style={styles.containerInfo}>
                          <Text style={styles.info}>NOME DO VEÍCULO:</Text>
                          <Text style={styles.listInfo} key={item.id}>{item.veiculo}</Text>
                        </View>
                        <View style={styles.containerInfo}>
                          <Text style={styles.info}>MARCA DO VEÍCULO:</Text>
                          <Text style={styles.listInfo} key={item.id}>{item.marca}</Text>
                        </View>
                        <View style={styles.containerInfo}>
                          <Text style={styles.info}>PLACA DO VEÍCULO:</Text>
                          <Text style={styles.listInfo} key={item.id}>{item.placa}</Text>
                        </View>
                        <View style={styles.containerInfo}>
                          <Text style={styles.info}>COR DO VEÍCULO:</Text>
                          <Text style={styles.listInfo} key={item.id}>{item.cor}</Text>
                        </View>
                        <View style={styles.containerInfo}>
                          <Text style={styles.info}>RAMAL DO SETOR:</Text>
                          <Text style={styles.listInfo} key={item.id}>{item.contato}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </>
                ) : ( 
                  <>    
                    <Text style={{fontSize: 27, color: '#fff', marginTop:'70%', fontWeight: 'bold'}}>Nenhum perfil encontrado</Text>
                  </>
                )}
          </ScrollView>
        </ImageBackground>
      </View>
  )
}

export default Pesquisar

const styles = StyleSheet.create({
  container:{ flex: 1},
  background:{flex: 1, resizeMode: 'cover',width: '100%', alignItems: 'center'},
  containerCampoPesquisa:{ alignItems: 'center', justifyContent: 'center', width: '100%'},
  campoPesquisa:{ width: '95%', height: 40, paddingLeft: 50, borderRadius: 5, marginTop: 15, marginBottom: 10, backgroundColor: '#fff'},
  textButtonPesquisar:{ color: '#fff', fontSize: 20, fontWeight: 'bold'},
  listContainer:{ width: '100%', flexDirection: 'row', padding: 15, alignItems: 'center', justifyContent: 'center'},
  perfil:{ width: '85%', borderRadius: 15, padding: 5, borderWidth: 3, borderColor: '#c1c1c1', backgroundColor: '#fff', elevation: 5, shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 2, shadowOffset: { height: 1, width: 1}},
  buttonDelete:{ marginLeft: 230},
  containerInfo:{ justifyContent: 'center', alignItems: 'center'},
  info:{ fontSize: 15, color: '#000', fontWeight: 'bold', textAlign: 'center'},
  listInfo:{ fontSize: 15, color: '#f4511e', fontWeight: 'bold', marginBottom: 15},
})
