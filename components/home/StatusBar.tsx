import { Bell, Bolt, CircleUserRound } from 'lucide-react-native'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native'

export function StatusBar() {
  return (
    <View className='h-32 p-6 justify-between'>
      <View className='flex-row justify-between items-center'>
        <CircleUserRound size={25} />
        <View className='flex-row items-center justify-center gap-6'>
          <TouchableOpacity>
            <Link
              href='/notification'
              asChild
            >
              <Bell size={25} />
            </Link>
          </TouchableOpacity>
          <Bolt size={25} />
        </View>
      </View>
      <Text className='text-2xl font-bold'>SD Fulaninho</Text>
    </View>
  )
}
