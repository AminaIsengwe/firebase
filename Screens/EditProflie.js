import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import { readData, writeData } from '../fetch'
export default function EditProflie() {
  const [username, setUsername] =useState("")
  const [email, setEmail] =useState("")
  const [fullName, setFullName] =useState("")



  return (

    <View style={styles.container}>
        <View style={styles.top}>
        <Icon name="chevron-left" color="black"></Icon>    
        <Text style={styles.text1}>Edit Proflie</Text>
        <Text  style={styles.text2}>Done</Text>
         </View>   
         <View style={styles.bottom}>
          <View style={styles.imagecontainer}>
        <Image source={require('../assets/person.jpeg')} style={styles.image}></Image>
        <View style={styles.camera}>
        <Icon name='camera' type="material-community" color='black'></Icon>
        </View>
        </View>
        <View style={styles.inputcontainer}>
         <TextInput 
         placeholder='Username'
         style={styles.input}
         value={username}
         onChangeText={setUsername}
         mode='offline'
         theme={{roundness:25}} 
         underlineColor='white'
         left={<TextInput.Icon icon='account-outline'></TextInput.Icon>}
         ></TextInput>
        <TextInput 
         placeholder='Full names'
         style={styles.input}
         mode='offline'
         value={fullName}
         onChangeText={setFullName}
         theme={{roundness:25}} 
         underlineColor='white'
         left={<TextInput.Icon icon='account-outline'></TextInput.Icon>}
         ></TextInput>
          <TextInput 
         placeholder='Email'
         style={styles.input}
         mode='offline'
         value={email}
         onChangeText={setEmail}
         theme={{roundness:25}} 
         underlineColor='white'
         left={<TextInput.Icon icon='email-outline'></TextInput.Icon>}
         ></TextInput>
         <TouchableOpacity style={styles.save} onPress={()=>writeData(username, email, fullName)}>
          <Text>Save</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.save} onPress={()=>readData()}>
          <Text>Log</Text>
         </TouchableOpacity>
        </View>
            </View> 
            <TextInput></TextInput>
          </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0EBE4',
      },
top:{
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
   padding:15,
   paddingTop:40,
   height:'30%'
},
text1:{
fontSize:18,
fontWeight:'bold'
},
text2:{
    fontSize:15,
    fontWeight:'bold'
    },
bottom:{
alignContent:'flex-start',
backgroundColor:'white',
height:'70%',
borderRadius:25,
padding:15
},
input:{
    borderEndColor:'white',
    borderRadius:25,
    backgroundColor:'#EFEFF0',
    marginVertical:15
},
image:{
borderWidth:2,
borderRadius:150,
height:200,
width:200,
borderColor:'#47AD6D',

},
imagecontainer:{
  alignItems:'center',
  bottom:120,
},
camera:{
  backgroundColor:'#47AD6D',
  padding:10,
  position: 'relative',
  borderRadius:10,
  bottom:20,
  left:40

},
inputcontainer:{
  bottom:120,
}

})