import { RecentActivities } from '@/components/home/RecentActivities'
import { StatusBar } from '@/components/home/StatusBar'
import { VehicleStats } from '@/components/home/VehicleStats'
import { Box } from '@/components/ui/box'

export default function HomeScreen() {
  return (
    <Box className='flex-1'>
      <StatusBar />
      <VehicleStats />
      <RecentActivities />
    </Box>
  )
}
