import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import './global.css'

import '@/app/global.css'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <GluestackUIProvider mode='light'>
      <SafeAreaProvider>
        <Stack initialRouteName='(auth)/login'>
          <Stack.Screen
            name='(auth)/login'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='(tabs)'
            options={{ headerShown: false }}
          />
        </Stack>
      </SafeAreaProvider>
    </GluestackUIProvider>
  )
}
