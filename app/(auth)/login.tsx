import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { Input, InputField } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'

export default function LoginScreen() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <SafeAreaView className='flex-1 items-center justify-center p-6'>
      <Image
        size={'2xl'}
        source={require('@/assets/images/logoPMTO.png')}
        resizeMode='contain'
        alt='Logo PMTO'
      />

      <Text className='text-lg font-bold my-4'>Check VTR</Text>

      <Box className='w-full gap-2'>
        <Input
          size={'xl'}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            value={login}
            onChangeText={setLogin}
            placeholder='Digite seu usuário'
          />
        </Input>

        <Input
          size={'xl'}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            value={senha}
            onChangeText={setSenha}
            placeholder='Digite sua senha'
          />
        </Input>
      </Box>

      <Button
        size={'xl'}
        className='w-full mt-4'
        onPress={() => router.replace('/home')}
      >
        <ButtonText>Entrar</ButtonText>
      </Button>
    </SafeAreaView>
  )
}
