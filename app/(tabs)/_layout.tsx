import { Tabs } from 'expo-router'
import { Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { HapticTab } from '@/components/HapticTab'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { CarFront, House, Bell } from 'lucide-react-native'

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#16A34A',
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: {
            height: 60,
            paddingTop: Platform.OS === 'android' ? 5 : 0,
            paddingBottom: 5,
            position: Platform.OS === 'ios' ? 'absolute' : 'relative',
          },
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

        <Tabs.Screen
          name='notification'
          options={{
            title: 'Notificações',
            tabBarIcon: ({ color }) => (
              <Bell
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
