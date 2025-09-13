import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <Box className='flex-1 items-center justify-center'>
        <Button
          variant='solid'
          size='md'
          action='primary'
          onPress={() => router.replace('/(tabs)/home')}
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </Box>
    </SafeAreaView>
  )
}
