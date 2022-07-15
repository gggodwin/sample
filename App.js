import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons';

export default class App extends React.Component {
    render (){
        return(
          <View style = {styles.container}>
              <View style = {{flexDirection:'row'}}>
                  <TouchableOpacity style = {styles.tile}><Icon name = 'close' style = {styles.tileX}></Icon></TouchableOpacity>
                  <TouchableOpacity style = {styles.tile}><Icon name = 'circle-outline' style = {styles.tile0}></Icon></TouchableOpacity>
                  <TouchableOpacity style = {styles.tile}></TouchableOpacity>
              </View>
              <View style = {{flexDirection:'row'}}>
                  <TouchableOpacity style = {styles.tile}></TouchableOpacity>
                  <TouchableOpacity style = {styles.tile}></TouchableOpacity>
                  <TouchableOpacity style = {styles.tile}></TouchableOpacity>
              </View>
              <View style = {{flexDirection:'row'}}>
                  <TouchableOpacity style = {styles.tile}></TouchableOpacity>
                  <TouchableOpacity style = {styles.tile}></TouchableOpacity>
                  <TouchableOpacity style = {styles.tile}></TouchableOpacity>
              </View>
              
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tile:{
    borderWidth: 2,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  tileX:{
    color: 'red',
    fontSize: 100
  },

  tile0:{
    color: 'blue',
    fontSize: 80,
  }
});
