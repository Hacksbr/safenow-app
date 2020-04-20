import React, { useState, useEffect } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

// import api from '../../services/api'

import logoImg from '../../assets/logo_icon.png'
import styles from './styles'

export default function Chat() {
  const navigation = useNavigation()

  const [brokers, setBrokers] = useState([])
  const [message, setMessage] = useState('')
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
    // setLoading(true)

    // sleep(3000).then(() => {
    //   loadBrokers()
    // })
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


      <View style={styles.chatText}></View>

      <View style={styles.input}>
        <Entypo name="emoji-happy" size={16} color="#021276" />
        <TextInput
          placeholder="Envie sua mensagem..."
          style={styles.sendInput}
          autoCapitalize="none"
          autoCorrect={false}
          blurOnSubmit={false}
          returnKeyType='next'
          onChangeText={setMessage}
          value={message}
        />
        <MaterialIcons name="send" size={16} color="#021276" />
      </View>
    </View>
  )
}
