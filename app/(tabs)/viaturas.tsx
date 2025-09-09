import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { vehicles } from '@/data/vehicles'
import { ChevronRight, Search } from 'lucide-react-native'
import { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

const filtros: string[] = ['Todos', 'Polo', 'Duster', 'Triton', 'SW4']

export default function VehiclesScreen() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos')
  const [search, setSearch] = useState('')

  const viaturasFiltradas = vehicles.filter((v) => {
    const matchFiltro = filtroAtivo === 'Todos' || v.modelo === filtroAtivo
    const termo = search.toLowerCase()
    const matchSearch =
      v.placa.toLowerCase().includes(termo) ||
      v.modelo.toLowerCase().includes(termo)
    return matchFiltro && matchSearch
  })

  return (
    <View className='flex-1'>
      <View className='px-4 pt-6'>
        <Text className='text-xl font-bold mb-3'>Viaturas</Text>

        <Input
          className='rounded-lg'
          variant='outline'
          size='xl'
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputSlot className='pl-3'>
            <InputIcon
              as={Search}
              size={20}
            />
          </InputSlot>
          <InputField
            value={search}
            onChangeText={setSearch}
            placeholder='Enter Text here...'
          />
        </Input>

        <FlatList
          data={filtros}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setFiltroAtivo(item)}
              className={`px-4 py-2 rounded-full mr-2 mt-3 ${
                filtroAtivo === item ? 'bg-green-200' : 'bg-[#E8EFE9]'
              }`}
            >
              <Text
                className={`text-sm ${
                  filtroAtivo === item
                    ? 'font-bold text-green-800'
                    : 'text-black'
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        data={viaturasFiltradas}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text className='text-center mt-6 text-gray-500'>
            Nenhuma viatura encontrada
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity className='flex-row items-center px-4 py-3 border-b border-gray-200'>
            <View className='w-9 h-9 rounded-full bg-green-100 items-center justify-center mr-3'>
              <Text className='font-bold'>{item.tipo}</Text>
            </View>
            <Text className='flex-1 text-base'>{item.placa}</Text>
            <ChevronRight
              size={20}
              color='#333'
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
