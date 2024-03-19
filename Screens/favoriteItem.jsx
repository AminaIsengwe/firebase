import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

export default function FavoriteItem({image,name,caption,price}) {
  return (
<View style={styles.container}>
<View style={styles.itemcard}>
<Image style={styles.image} source={image}/>
<View style={styles.textcard}>
<Text style={styles.text1}>{name}</Text>
<Text style={styles.text2}>{caption}</Text>
</View>
<View style={styles.money}>
<Text style={styles.text3}>{price}</Text> 
<Icon name="chevron-right" type="material-community"/> 
</View>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
 
    },
    itemcard:{
        paddingVertical:10,
        borderBottomColor: '#EFF0EF',
        borderBottomWidth: 1,
        marginVertical: 5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    image:{
        width:'30%',
        height:100,
      },
      text1:{
        fontSize:15,
        fontWeight:'bold',
      },
      text2:{
        fontSize:15,
        color:'gray'
      },
      text3:{
        fontSize:17,
        fontWeight:'bold',
      },
      money:{
        flexDirection:'row',
        justifyContent:'center',
        
      },
      textcard:{
        width:'30%',
      }


})