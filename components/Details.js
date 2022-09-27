import { StyleSheet, View, Text } from "react-native"
import { customers } from "../customers"

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
       { customers.map(customer => {
        return <Text style={styles.names} onPress={ () => navigation.goBack() } title='Go Back to Contacts'>
          {`${customer.name.first} ${customer.name.last}
           ${customer.email} 
           ${customer.cell} 
           ${customer.location.city}`}
        </Text>
       })}
    </View>
  )
}

export default DetailsScreen

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
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  }
});