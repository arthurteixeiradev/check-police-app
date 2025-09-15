import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/modal'
import { Link } from 'expo-router'
import { Bell, Bolt, CircleUserRound } from 'lucide-react-native'
import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

export function StatusBar() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Box className='h-32 p-6 justify-between border-b border-zinc-300'>
      <Box className='flex-row justify-between items-center'>
        <CircleUserRound size={25} />
        <Box className='flex-row items-center justify-center gap-6'>
          <TouchableOpacity>
            <Link
              href='/notification'
              asChild
            >
              <Bell size={25} />
            </Link>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Bolt size={25} />
          </TouchableOpacity>
        </Box>
      </Box>

      <Text className='text-2xl font-bold'>SD Fulaninho</Text>

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <ModalBackdrop />
        <ModalContent className='max-w-[375px] max-h-72'>
          <ModalHeader className='justify-center'>
            <Heading size='lg'>Configurações</Heading>
          </ModalHeader>
          <ModalBody>
            <Text className='text-center mb-4'>Escolha uma opção abaixo:</Text>
            <Box className='items-center justify-center gap-2'>
              <Button
                className='w-full'
                variant={'outline'}
              >
                <ButtonText className='text-black'>Opção1</ButtonText>
              </Button>
              <Button
                className='w-full'
                variant={'outline'}
              >
                <ButtonText className='text-black'>Opção2</ButtonText>
              </Button>
            </Box>
          </ModalBody>
          <ModalFooter className='items-center justify-center'>
            <Button onPress={() => setModalVisible(false)}>
              <ButtonText>Fechar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
