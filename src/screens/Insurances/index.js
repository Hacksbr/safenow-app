import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// import api from '../../services/api'

import logoImg from '../../assets/logo_icon.png'
import styles from './styles'

export default function Insurances() {
  const navigation = useNavigation()
  const [insurances, setInsurances] = useState([])
  const [loading, setLoading] = useState(false)

  function navigateToBrokers(brockers) {
    navigation.navigate('Chat')
  }

  async function loadInsurance() {
    if (loading) {
      return
    }
    setLoading(true)
    let data = require('../../data/insurance.json');
    setInsurances(data)
    setLoading(false)
  }

  useEffect(() => {
    loadInsurance()
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Escolha o tipo de seguro.</Text>
      
      <FlatList
        data={insurances}
        style={styles.insuranceList}
        keyExtractor={insurance => String(insurance.id)}
        showsHorizontalScrollIndicator={false}
        onEndReached={loadInsurance}
        onEndReachedThreshold={0.2}
        renderItem={({ item: insurance }) => (
          <TouchableOpacity style={styles.insuranceButton} onPress={() => navigateToBrokers(insurance.brockers)}>
            <Text style={styles.insuranceProperty}>{ insurance.name }</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
