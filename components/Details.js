import { StyleSheet, View, Text } from "react-native"

const DetailsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>

      <img src={route.params.customer.picture.large} style={styles.image} onClick={ () => navigation.goBack() } title='Go Back to Contacts' /> 

      <Text style={styles.names} onClick={ () => navigation.goBack() } title='Go Back to Contacts'>
          {`
           Name:  ${route.params.customer.name.first} ${route.params.customer.name.last}
           Email: ${route.params.customer.email} 
           Cell:  ${route.params.customer.cell} 
           City:  ${route.params.customer.location.city}
           `}
        </Text>
    </View>
  )
}

export default DetailsScreen

// STYLES
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 20, 
    margin: '1rem'
  },

  names: {
    flex: 1,
    color: 'red',
    marginTop: '1rem',
    paddingLeft: '50%',
    fontSize: 18,
    border: '1px solid black',
    borderRadius: '1rem',
    maxWidth:'100%',
    textAlign:'left',
  },

  image:{
    flex: '1',
    borderRadius: '2rem',
  }
});