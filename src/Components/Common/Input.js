import React from 'react';
import { TextInput, View, Text }  from 'react-native';

const Input = ({label,value,onChangeText,placeholder,secureTextEntry}) => {

    const {inputStyle, labelStyle,containerStyle } = styles;
    return(

        <View style={containerStyle}>
             <Text style={labelStyle}>{label}</Text>
             <TextInput secureTextEntry={secureTextEntry} underlineColorAndroid='transparent'  placeholder={placeholder} autoCorrect={false} style={inputStyle} value={value} onChangeText={onChangeText}  />
        </View>
    );

};

// flex::: 2/3 is allocated to one sibling and 1/3 to the other
const styles = {

    inputStyle:{
       color:'#000',
       paddingRight:5,
       paddingLeft:5,
       fontSize:18,
       lineHeight:23,
       flex:2,
       borderBottomWidth:0,
    },
    labelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1,
    },

    containerStyle: {
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
};


export {Input}

// const options = {
//       auto: 'placeholders',
//       fields: {
//         email: {
//           maxLength: 250,
//           autoCorrect: false,
//           keyboardType: 'email-address',
//           autoCapitalize: 'none',
//          underlineColorAndroid: 'transparent',
//           onSubmitEditing: () => this.refs.form.getComponent('password').refs.input.focus()
//         },
//         password: {
//           maxLength: 70,
//           secureTextEntry: true,
//          underlineColorAndroid: 'transparent',
//           error: 'Must have 6-12 characters with at least 1 number and 1 special character'
//         }
//       }
//     };