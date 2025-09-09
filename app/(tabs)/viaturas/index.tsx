import { Button, ButtonText } from '@/components/ui/button'
import { View } from 'react-native'

export default function ViaturasScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-red-500'>
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
