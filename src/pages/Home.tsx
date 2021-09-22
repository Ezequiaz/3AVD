import React, { useState,useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, Platform, FlatList,Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  { Button }  from '../components/Button'
import { SkillCard } from '../components/SkillCard'
interface Cadastro{
    id: string,
    codigo: string,
    pais: string,
    
}


export function Home() {
    const [newCodigo, setNewCodigo] = useState('')
    const [myCodigo, setMyCodigo] = useState<Cadastro[]>([])
    const [newPais, setNewPais] = useState('')
    const [myPais, setMyPais] = useState<Cadastro[]>([])
    const [greeting, setGreeting] = useState('')

    function handleAddNew(){
        if(newCodigo.trim()!="" && newPais.trim()!=''){
            const Dati = {
                id: String(new Date().getTime()),
                codigo: newCodigo,
                pais: newPais,
                
            }
            setMyCodigo([...myCodigo,Dati])
            setNewCodigo('')
            setMyPais([...myPais,Dati])
            setNewPais('')
        }
        else{
                       
                alert('Favor entrar com as informações pedidas.')
              
              }
            
        
        }

    function handleRemove(id: string){
        setMyCodigo(myCodigo.filter(Cadastro=> Cadastro.id !== id))

    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >=5 && currentHour < 12){
            setGreeting('Bom dia')
        }else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Boa Tarde')
        } else {
            setGreeting('Boa Noite')
        }
    }, [])

    useEffect(() => {
        async function loadData() {
            const storagedPaises = await AsyncStorage.getItem('@myCodigo:Codigo')
            if(storagedPaises){
                setMyCodigo(JSON.parse(storagedPaises))
            }
        }
        loadData()
    }, [])
    useEffect (() =>{
        async function saveData(){
            await AsyncStorage.setItem('@myCodigo:Codigo', JSON.stringify(myCodigo))
        }
        saveData()
    },[myCodigo])

  return(
    <>
        <View style={styles.container}>
            <Image style={{width: 180, height: 60 ,alignSelf: 'center', justifyContent: 'center'}} source={require('../assets/Google.png')}/>
          
            <Text style={[styles.greetings, {textAlign:'center'}]}>
                {greeting}! 
            </Text>
            

            <Text style={[styles.title,{textAlign: 'center'},{marginBottom: 20}]}>Bem vindo ao Cadastro de Países da GOOGLE!

            </Text>

            <Text style= {[styles.title2,{textAlign:'center'},{marginBottom: 8}]}>
               Abaixo, entre com o código e o nome do País que queira Cadastrar! 
            </Text>
            <TextInput
            style={styles.input}
            placeholder= 'Código do País'
            value={newCodigo}
            placeholderTextColor='#1616163b'
            onChangeText={value => setNewCodigo(value)}
            />

            <TextInput
            style={styles.input}
            placeholder= 'Nome do Pais'
            value={newPais}
            placeholderTextColor='#1616163b'
            onChangeText={value => setNewPais(value)}
            />

            

            <Button 
            onPress={handleAddNew}
            title = 'Cadastrar'
            />

                       
            <Text style={[styles.title, {textAlign:'center'}]}>
                Código do País/Nome
            </Text>

            <FlatList showsVerticalScrollIndicator={false}
            data={myCodigo}
            keyExtractor={item=> item.id}
            renderItem={({item})=> ( 
                <SkillCard
                Codigo={item.codigo}
                Pais={item.pais}
                onPress={() => handleRemove(item.id)}
                />
                
            )}

            />
            
            
        </View>
    </>
  )
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff',
        paddingHorizontal:30,
        paddingVertical: 70
    },
    title: {
        color:'#000',
        fontSize:25,
        fontWeight: 'bold'
    },
    title2:{
        color:'#5a5a5a',
        fontSize:15,
        fontWeight: 'bold'
    },
    input:{
        backgroundColor:'#ffffff',
        color: '#000',
        fontSize: 18,
        padding: Platform.OS =='ios' ? 15 : 12,
        marginTop: 5,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#8888883c',
        
        
    },
    greetings: {
        color: '#000',
        fontSize:20,
    }, 
})