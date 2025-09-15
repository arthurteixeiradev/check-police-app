import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { CarFront, Cog } from 'lucide-react-native'
import { ScrollView } from 'react-native'

export function VehicleStats() {
  return (
    <Box className='p-6'>
      <Text className='text-lg font-bold text-left mb-2 text-black'>
        Estatísticas
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 100 }}
      >
        <Box className='bg-green-200 rounded-lg p-6 flex-row items-center min-h-[130px] w-[300px] mr-4'>
          <Box className='mr-6'>
            <Cog
              size={48}
              color={'#166534'}
            />
          </Box>
          <Box>
            <Text className='text-green-800 text-4xl font-bold'>2</Text>
            <Text className='text-green-800 text-lg font-medium'>
              Viaturas em{'\n'}Manutenção
            </Text>
          </Box>
        </Box>
        <Box className='bg-blue-200 rounded-lg p-6 flex-row items-center min-h-[130px] w-[300px]'>
          <Box className='mr-6'>
            <CarFront
              size={48}
              color={'#1e40af'}
            />
          </Box>
          <Box>
            <Text className='text-blue-800 text-4xl font-bold'>5</Text>
            <Text className='text-blue-800 text-lg font-medium'>
              Viaturas{'\n'}Disponíveis
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  )
}
