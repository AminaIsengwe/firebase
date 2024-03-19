import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Product from './Screens/Product';
import FavoriteItem from './Screens/favoriteItem';
import Favorite from './Screens/Favorite';
import MycartItem from './Screens/MycartItem';
import Mycart from './Screens/Mycart';
import EditProflie from './Screens/EditProflie';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Product/>  */}
      {/* <FavoriteItem/>   */}
       {/* <Favorite/>  */}
      {/* <MycartItem/> */}
      {/* <Mycart/> */}
      <EditProflie/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
