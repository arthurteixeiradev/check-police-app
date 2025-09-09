import { Button, ButtonText } from '@/components/ui/button'
import { View } from 'react-native'

export default function HomeScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Button
        variant='solid'
        size='md'
        action='primary'
      >
        <ButtonText>Click me</ButtonText>
      </Button>
    </View>
  )
}
