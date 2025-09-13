import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'

export default function HomeScreen() {
  return (
    <Box className='flex-1 items-center justify-center'>
      <Button
        variant='solid'
        size='md'
        action='primary'
      >
        <ButtonText>Click me</ButtonText>
      </Button>
    </Box>
  )
}
