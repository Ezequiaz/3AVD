import React from "react";
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View} from 'react-native'

interface ISkillCaraProps extends TouchableOpacityProps {
    Codigo: string,
    Pais: string,

}

export function SkillCard({Codigo, Pais, ...rest}: ISkillCaraProps){
    return (
        <TouchableOpacity
            style={styles.viewGeral} 
            
        >
        <View style={styles.infoPais}>
           <Text style={styles.textCodigo}>
        
            {Codigo}
            </Text>
            <Text style={styles.textPais}>
                
            {Pais}
            </Text>
        </View>

            <TouchableOpacity style={styles.buttonStyle}
            {...rest} >
                <Text style={styles.buttonText}>
                    X
                </Text>
                
            </TouchableOpacity>
            
       </TouchableOpacity>

        
       
        
    )
}
const styles = StyleSheet.create({
    viewGeral: {
        
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    infoPais: {
        backgroundColor: '#ffffff81',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        width: '90%',
    },

    textCodigo: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        width: '50%',
        borderWidth: 2,
        borderColor: '#F2A007',
        borderRadius: 30,
        textAlign:'center',
        
    },
    textPais: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        width: '50%',
        borderWidth: 2,
        borderColor: '#33A650',
        borderRadius: 30,
        textAlign:'center',
        
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        
        
    },
    buttonStyle: {
        backgroundColor: '#ff0000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        width: '10%',
        borderWidth: 2,
        borderRadius: 30
    }
})