import { Tabs } from 'expo-router'
import { Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { HapticTab } from '@/components/HapticTab'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { CarFront, House } from 'lucide-react-native'

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.light.tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: { position: 'absolute' },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <House
                size={25}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='viaturas'
          options={{
            title: 'Viaturas',
            tabBarIcon: ({ color }) => (
              <CarFront
                size={25}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
