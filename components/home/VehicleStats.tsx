import { Car, Cog } from 'lucide-react-native'
import { ScrollView, Text, View } from 'react-native'

export function VehicleStats() {
  return (
    <View className="bg-[#f7fbf6] p-2">
      <Text className="text-base font-bold text-left mb-2">Estatísticas</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 100 }}
      >
        <View className="bg-green-900 rounded-3xl p-6 flex-row items-center min-h-[130px] mr-4 w-[300px]">
          <View className="mr-6">
            <Cog size={48} color="#fff" />
          </View>
          <View>
            <Text className="text-white text-4xl font-bold text-left">2</Text>
            <Text className="text-white text-lg text-left">
              Viaturas em{'\n'}Manutenção
            </Text>
          </View>
        </View>
        <View className="bg-blue-500 rounded-3xl p-6 flex-row items-center min-h-[130px] w-[300px]">
          <View className="mr-6">
            <Car size={48} color="#fff" />
          </View>
          <View>
            <Text className="text-white text-4xl font-bold text-left">5</Text>
            <Text className="text-white text-lg text-left">
              Viaturas{'\n'}Disponíveis
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
