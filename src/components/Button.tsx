import React from "react";
import{
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native'

// type ButtonProps = TouchableOpacityProps;

interface ButtonProps extends TouchableOpacityProps { 
    title: string;
}
export function Button({title, ...rest }: ButtonProps) {
    return(
        <TouchableOpacity 
            style={styles.button}
             activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor:'#448FF2',
        padding:15,
        borderRadius:20,
        alignItems:'center',
        marginTop:10
    },
    buttonText: {
        color: '#fff',
        fontSize:18,
        fontWeight:'bold'
    },
})