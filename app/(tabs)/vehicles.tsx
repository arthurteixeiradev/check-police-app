import { Box } from '@/components/ui/box'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { FilterItem } from '@/components/vehicles/FilterItem'
import { VehicleItem } from '@/components/vehicles/VehicleItem'
import { Filtro, filtros } from '@/data/vehicleFilter'
import { vehicles } from '@/data/vehicles'
import { Search } from 'lucide-react-native'
import { useCallback, useMemo, useState } from 'react'
import { FlatList } from 'react-native'

export default function VehiclesScreen() {
  const [filtroAtivo, setFiltroAtivo] = useState<Filtro>('Todos')
  const [search, setSearch] = useState('')

  const viaturasFiltradas = useMemo(() => {
    const termo = search.trim().toLowerCase()
    return vehicles.filter(({ modelo, placa }) => {
      const matchFiltro = filtroAtivo === 'Todos' || modelo === filtroAtivo
      const matchSearch =
        !termo ||
        placa.toLowerCase().includes(termo) ||
        modelo.toLowerCase().includes(termo)
      return matchFiltro && matchSearch
    })
  }, [filtroAtivo, search])

  const renderFiltro = useCallback(
    ({ item }: { item: Filtro }) => (
      <FilterItem
        label={item}
        ativo={filtroAtivo === item}
        onPress={() => setFiltroAtivo(item)}
      />
    ),
    [filtroAtivo],
  )

  const renderViatura = useCallback(
    ({ item }: { item: (typeof vehicles)[number] }) => (
      <VehicleItem
        tipo={item.tipo}
        placa={item.placa}
      />
    ),
    [],
  )

  return (
    <Box className='flex-1 p-6 gap-4'>
      <Box className='gap-4'>
        <Text className='text-xl text-center font-bold mb-3 text-black'>
          Viaturas
        </Text>

        <Input
          className='rounded-full px-4 bg-zinc-200 h-14'
          variant='outline'
          size='xl'
        >
          <InputField
            value={search}
            onChangeText={setSearch}
            placeholder='Pesquisar viatura'
          />
          <InputSlot className=''>
            <InputIcon
              as={Search}
              size={20}
            />
          </InputSlot>
        </Input>

        <FlatList
          data={filtros}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={renderFiltro}
          contentContainerStyle={{ paddingVertical: 8 }}
        />
      </Box>

      <FlatList
        data={viaturasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={renderViatura}
        ListEmptyComponent={
          <Text className='text-center mt-6 text-gray-500'>
            Nenhuma viatura encontrada
          </Text>
        }
        removeClippedSubviews
        initialNumToRender={8}
        maxToRenderPerBatch={10}
      />
    </Box>
  )
}
