import CardNotification from '@/components/notification/CardNotification'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { mockNotifications } from '@/mocks/notification'
import React from 'react'
import { FlatList } from 'react-native'

export default function NotificationScreen() {
  return (
    <Box className='flex-1 pt-6 gap-4'>
      <Text className='text-xl text-center font-bold mb-3 text-black'>
        Notificações
      </Text>
      <FlatList
        data={mockNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardNotification
            title={item.title}
            description={item.description}
            createdAt={item.createdAt}
          />
        )}
      />
    </Box>
  )
}
