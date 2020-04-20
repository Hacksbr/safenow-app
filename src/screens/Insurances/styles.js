import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },
  
  insuranceList: {
    marginTop: 8,
  },

  insurance: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  insuranceButton: {
    // width: '100%',
    // height: 50,
    borderRadius: 8,
    padding: 24,
    backgroundColor: '#FFF',
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  insuranceProperty: {
    fontSize: 18,
    color: '#021276',
    fontWeight: 'bold',
  },

  insuranceValue: {
    fontSize: 15,
    color: '#737380',
  },

  detailsButtonText: {
    color: '#021276',
    fontSize: 15,
    fontWeight: 'bold'
  },
})
