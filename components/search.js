import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
 
export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
 
        <Text style={styles.text}>
          Ceci est un pied de page
        </Text>
 
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  text: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      //borderWidth: 1,
      paddingLeft: 5
    }
})
 