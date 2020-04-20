import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  // ===== LOADING =====
  loading: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    width: 70,
    marginTop: 8,
    fontSize: 10,
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  brokerList: {
    marginTop: 8,
  },

  broker: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  brokerProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    paddingBottom: 6,
  },

  brokerValue: {
    fontSize: 15,
    color: '#737380',
  },

  detailsButton: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#021276',
    fontSize: 15,
    fontWeight: 'bold'
  },

  chatText: {
    height: '75%',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },

  input: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  sendInput: {
    width: '93%',
    paddingLeft: 4,
    // borderRadius: 8,
    backgroundColor: '#FFF',
  },

})
