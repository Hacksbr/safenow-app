import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

// import api from '../../services/api'

import logoImg from '../../assets/logo_icon.png'
import styles from './styles'

export default function Brokers() {
  const navigation = useNavigation()

  const [brokers, setBrokers] = useState([])
  const [loading, setLoading] = useState(false)

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function navigateBack() {
    navigation.goBack()
  }

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident })
  }

  async function loadBrokers() {
    let data = require('../../data/brokers.json');
    setBrokers(data)
    setLoading(false)
  }

  useEffect(() => {
    if (loading) {
      return
    }
    setLoading(true)

    sleep(3000).then(() => {
      loadBrokers()
    })
  }, [])


  return (
    loading ?
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#021276" />
      <Text style={styles.loadingText}>Buscando corretor...</Text>
    </View>
    :
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#021276" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.search}>
        <Feather name="search" size={16} color="#021276" />
        <TextInput
          placeholder="Encontrar um corretor..."
          style={styles.searchInput}
          autoCapitalize="none"
          autoCorrect={false}
          blurOnSubmit={false}
          returnKeyType='next'
          onSubmitEditing={() => { this.secondTextInput.focus() }}
          // onChangeText={setEmail}
          // value={email}
        />
      </View>
      
      <FlatList
        data={brokers}
        style={styles.brokerList}
        keyExtractor={broker => String(broker.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadBrokers}
        onEndReachedThreshold={0.2}
        renderItem={({ item: broker }) => (
          <View style={styles.broker}>
            <Text style={styles.brokerProperty}>
              Classificação: <Text>
                <AntDesign key={1} name={1 > broker.rating ? "staro" : "star"} size={16} color="#021276" />
                <AntDesign key={2} name={2 > broker.rating ? "staro" : "star"} size={16} color="#021276" />
                <AntDesign key={3} name={3 > broker.rating ? "staro" : "star"} size={16} color="#021276" />
                <AntDesign key={4} name={4 > broker.rating ? "staro" : "star"} size={16} color="#021276" />
                <AntDesign key={5} name={5 > broker.rating ? "staro" : "star"} size={16} color="#021276" />
              </Text>
            </Text>

            <Text style={styles.brokerProperty}>
              Nome: <Text style={styles.brokerValue}>{ broker.name }</Text>
            </Text>

            <Text style={styles.brokerProperty}>
              Cidade: <Text style={styles.brokerValue}>{ broker.city }</Text>
            </Text>

            <Text style={styles.brokerProperty}>
              UF: <Text style={styles.brokerValue}>{ broker.uf }</Text>
            </Text>

            <Text style={styles.brokerProperty}>
              E-mail: <Text style={styles.brokerValue}>{ broker.contact.email }</Text>
            </Text>

            <Text style={styles.brokerProperty}>
              Telefone: <Text style={styles.brokerValue}>{ broker.contact.phone }</Text>
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(broker)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#021276" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
