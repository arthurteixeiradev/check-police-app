import { Tabs } from 'expo-router'
import { Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'

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
          name='home/index'
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <IconSymbol
                size={28}
                name='house.fill'
                color={color}
              />
            ),
          }}
        />
      
      <Tabs.Screen
          name='viaturas/index'
          options={{
            title: 'Viaturas',
            tabBarIcon: ({ color }) => (
              <IconSymbol
                size={28}
                name='house.fill'
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
