import { ChevronRight } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

interface Props {
  tipo: string
  placa: string
}

export function VehicleItem({ tipo, placa }: Props) {
  return (
    <TouchableOpacity className='flex-row items-center py-3 border-b border-gray-200'>
      <View className='w-9 h-9 rounded-full bg-green-100 items-center justify-center mr-3'>
        <Text className='font-bold'>{tipo}</Text>
      </View>
      <Text className='flex-1 text-base'>{placa}</Text>
      <ChevronRight
        size={20}
        color='#333'
      />
    </TouchableOpacity>
  )
}
