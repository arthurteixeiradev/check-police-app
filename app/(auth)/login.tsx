import React, { useState } from 'react'
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native'
import { router } from 'expo-router'

export default function LoginScreen() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <SafeAreaView className='flex-1 bg-white items-center justify-center px-6'>
      {/* Logo */}
      <Image
        source={require('../../assets/images/logoPMTO.png')}
        style={{ width: 150, height: 150, marginBottom: 20 }}
        resizeMode='contain'
      />

      {/* Título */}
      <Text className='text-lg font-bold mb-8'>Check VTR</Text>

      {/* Input Login */}
      <TextInput
        className='w-full h-12 border border-gray-300 rounded-lg px-4 mb-4'
        placeholder='Digite aqui'
        value={login}
        onChangeText={setLogin}
      />

      {/* Input Senha */}
      <TextInput
        className='w-full h-12 border border-gray-300 rounded-lg px-4 mb-2'
        placeholder='Digite aqui'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Esqueceu a senha / Primeiro acesso */}
      <Text className='text-sm text-blue-600 mb-6'>
        Esqueceu a senha? Primeiro acesso?
      </Text>

      {/* Botão */}
      <TouchableOpacity
        className='w-full h-12 bg-green-700 rounded-lg items-center justify-center'
        onPress={() => router.replace('/(tabs)/home')}
      >
        <Text className='text-white font-bold'>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
