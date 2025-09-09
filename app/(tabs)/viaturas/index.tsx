import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useRouter } from 'expo-router'
import { ChevronRight, Search } from "lucide-react-native"
import { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

const filtros = ['Todos', 'Polo', 'Duster', 'Triton', 'SW4']

const viaturas = [
  { id: '1', tipo: 'D', placa: 'PM-0304', modelo: 'Duster' },
  { id: '2', tipo: 'D', placa: 'PM-0305', modelo: 'Duster' },
  { id: '3', tipo: 'D', placa: 'PM-0306', modelo: 'Duster' },
  { id: '4', tipo: 'D', placa: 'PM-0307', modelo: 'Duster' },
  { id: '5', tipo: 'P', placa: 'PM-0301', modelo: 'Polo' },
  { id: '6', tipo: 'P', placa: 'PM-0302', modelo: 'Polo' },
  { id: '7', tipo: 'P', placa: 'PM-0303', modelo: 'Polo' },
  { id: '8', tipo: 'T', placa: 'PM-0171', modelo: 'Triton' },
  { id: '9', tipo: 'T', placa: 'PM-0313', modelo: 'Triton' },
  { id: '10', tipo: 'T', placa: 'R-0016', modelo: 'Triton' },
  { id: '11', tipo: 'S', placa: 'PM-0300', modelo: 'SW4' },
]
type RootStackParamList = {
  checklist: { viatura: string }
  // add other routes if needed
}

export default function ViaturasScreen() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos')
  const [search, setSearch] = useState('')
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const router = useRouter()

  // aplica filtro + busca
  const viaturasFiltradas = viaturas.filter(v => {
    const matchFiltro = filtroAtivo === 'Todos' || v.modelo === filtroAtivo
    const termo = search.toLowerCase()
    const matchSearch =
      v.placa.toLowerCase().includes(termo) ||
      v.modelo.toLowerCase().includes(termo)
    return matchFiltro && matchSearch
  })

  return (
    <View className="flex-1 bg-[#F7FAF8]">
      {/* Header */}
      <View className="px-4 pt-6">
        <Text className="text-xl font-bold mb-3">Viaturas</Text>

        {/* Search */}
        <View className="flex-row items-center bg-[#F0F2F1] rounded-xl px-3 py-2">
          <Search size={20} color="#555" />
          <TextInput
            placeholder="Pesquisar viatura"
            value={search}
            onChangeText={setSearch}
            className="flex-1 ml-2 h-8 text-base"
          />
        </View>

        {/* Filtros */}
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
                  filtroAtivo === item ? 'font-bold text-green-800' : 'text-black'
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Lista */}
      <FlatList
        data={viaturasFiltradas}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text className="text-center mt-6 text-gray-500">
            Nenhuma viatura encontrada
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row items-center px-4 py-3 border-b border-gray-200"
            onPress={() => router.push({ pathname: '/checklist', params: { viatura: JSON.stringify(item) } })}
          >
            <View className="w-9 h-9 rounded-full bg-green-100 items-center justify-center mr-3">
              <Text className="font-bold">{item.tipo}</Text>
            </View>
            <Text className="flex-1 text-base">{item.placa}</Text>
            <ChevronRight size={20} color="#333" />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
