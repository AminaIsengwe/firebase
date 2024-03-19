import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import FavoriteItem from './favoriteItem'

export default function Favorite() {
    const products=[
        {
            id:1,
            image:require('../assets/spritecan.jpg'),
            name:'Sprite can',
            caption:'325ml,price',
            price: '500$'
        },
        {
            id:2,
            image:require('../assets/orange.png'),
            name:'Fanta',
            caption:'orange',
            price: '200$'
        },
        {
            id:3,
            image:require('../assets/apple juice.jpg'),
            name:'Apple Juice',
            caption:'apple',
            price: '300$'
        },
        {
            id:4,
            image:require('../assets/coke.jpeg'),
            name:'Cocacola',
            caption:'Coke',
            price: '205$'
        },


    ]
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Favorite
        </Text>
        <FlatList 
        data={products}
        renderItem={({item})=>  <FavoriteItem name={item.name} caption={item.caption} image={item.image} price={item.price} /> }
        keyExtractor={item => item.id}
        />

<View style={styles.buttoncard}>
    <TouchableOpacity style={styles.button}>
     <Text style={styles.buttontext}>Add All to cart</Text> 
      </TouchableOpacity>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white', 
        margin:15,
        padding:15,  
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        padding:10,
        paddingBottom:20,
        textAlign:'center',
        borderBottomColor: '#EFF0EF',
        borderBottomWidth: 1,
    },
    button:{
        backgroundColor:'#FE724C',
        justifyContent:'center',
        padding:15,
        borderRadius:5,
        alignItems:'center'
      },
      buttontext:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'sans-serif',
        color:'white'
      },
      buttoncard:{
      paddingVertical:20
      },
})