import { StatusBar } from '@/components/home/StatusBar'
import { VehicleStats } from '@/components/home/VehicleStats'
import { RecentActivities } from '@/components/home/RecentActivities'
import { View } from 'react-native'

export default function HomeScreen() {
  return (
    <View className='flex-1'>
      <StatusBar />
      <VehicleStats />
      <RecentActivities />
    </View>
  )
}
