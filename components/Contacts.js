import React  from "react"
import { StyleSheet, View, Text } from "react-native"
import { customers } from "../customers"


const ContactScreen = ({navigation}) => {
  return (
        <View style={styles.container}>
          { customers.map(customer => {
            return <Text style={styles.names} onPress={() =>navigation.navigate('Details', {customer: customer})} title="Go to details">
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
    fflex: 1,
    gap:'0.3rem',
    textAlign:'left',
    justifyContent: 'center',
  },

  names: {
    paddingLeft: '3rem',
    marginLeft: '.5rem',
    marginRight: '.5rem',
    backgroundColor: 'salmon',
    border: '1px solid black',
    color: '#000',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '1.7rem',
    borderRadius: '.5rem'
  }
});