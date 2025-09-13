import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Divider } from '@/components/ui/divider'
import { Heading } from '@/components/ui/heading'
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/modal'
import { Text } from '@/components/ui/text'
import { Icon } from '@gluestack-ui/themed'
import { ArrowRightIcon } from 'lucide-react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'

type NotificationProps = {
  title: string
  description: string
  createdAt: string
}

export default function CardNotification({
  title,
  description,
  createdAt,
}: NotificationProps) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        {({ pressed }) => (
          <Card
            className={`flex-1 p-6 ${pressed ? 'bg-gray-200' : 'bg-white'}`}
          >
            <Box className='flex-row items-start gap-4'>
              <Icon as={ArrowRightIcon} />
              <Box className='gap-2'>
                <Text className='font-bold text-xl text-black'>{title}</Text>
                <Text className='text-md'>{createdAt}</Text>
              </Box>
            </Box>
          </Card>
        )}
      </Pressable>
      <Divider className='bg-gray-200' />

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <ModalBackdrop />
        <ModalContent className='max-w-[375px] max-h-52'>
          <ModalHeader className='justify-center'>
            <Heading size='lg'>{title}</Heading>
          </ModalHeader>
          <ModalBody>
            <Text>{description}</Text>
          </ModalBody>
          <ModalFooter className='items-center justify-center'>
            <Button
              onPress={() => {
                setModalVisible(false)
              }}
            >
              <ButtonText>Fechar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
