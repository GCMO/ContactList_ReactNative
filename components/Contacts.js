import React  from "react"
import { StyleSheet, View, Text } from "react-native"
import { customers } from "../customers"


const ContactScreen = ({navigation}) => {
  return (
        <View style={styles.container}>
          { customers.map(customer => {
            return <Text style={styles.names} onPress={() =>navigation.openDrawer('Details')} title="Go to details">
              {`${customer.name.title} ${customer.name.first} ${customer.name.last}`}
            </Text>
          })}
        </View>
  )
}

export default ContactScreen

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  names: {
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  }
});