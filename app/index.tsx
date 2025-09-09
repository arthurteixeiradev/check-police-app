import { Button, ButtonText } from '@/components/ui/button'
import { router } from 'expo-router'
import { View } from 'react-native'

export default function LoginScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Button
        variant='solid'
        size='md'
        action='primary'
        onPress={() => router.push('/(tabs)')}
      >
        <ButtonText>Login</ButtonText>
      </Button>
    </View>
  )
}
