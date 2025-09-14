import { Box } from '@/components/ui/box';
import { Link, useRouter } from 'expo-router';
import { Bell, Bolt, CircleUserRound } from 'lucide-react-native';
import React, { useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';

export function StatusBar() {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  return (
    <View className="h-32 p-6 justify-between">
      <View className="flex-row justify-between items-center">
        <CircleUserRound size={25} />
        <View className="flex-row items-center justify-center gap-6">
          <TouchableOpacity>
            <Link href="/notification" asChild>
              <Bell size={25} />
            </Link>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Bolt size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <Text className="text-2xl font-bold">SD Fulaninho</Text>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          className="flex-1 justify-center items-center bg-black/50"
          onPress={() => setModalVisible(false)}
        >
          <Box className="bg-background-0 rounded-md border border-outline-100 shadow-hard-2 p-6 w-80 max-h-90">
            {/* Título */}
            <View className="items-center flex-row justify-center mb-4">
              <Text className="text-typography-900 font-bold text-xl">
                Configurações
              </Text>
            </View>

            {/* Descrição */}
            <View className="mb-6">
              <Text className="text-typography-700 text-base">
                Escolha uma opção abaixo:
              </Text>
            </View>

            {/* Botões */}
            <View className="flex-col gap-3">
              {/* Botão voltar para login */}
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  router.push('/(auth)/login');
                }}
                className="bg-primary-500 border border-primary-300 rounded px-5 h-10 flex-row items-center justify-center shadow-hard-1"
              >
                <Text className="text-typography-0 font-semibold">Voltar para Login</Text>
              </TouchableOpacity>

              {/* Botões extras */}
              <TouchableOpacity
                onPress={() => alert('Botão 2 clicado!')}
                className="bg-primary-500 border border-primary-300 rounded px-5 h-10 flex-row items-center justify-center shadow-hard-1"
              >
                <Text className="text-typography-0 font-semibold">Opção 2</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert('Botão 3 clicado!')}
                className="bg-primary-500 border border-primary-300 rounded px-5 h-10 flex-row items-center justify-center shadow-hard-1"
              >
                <Text className="text-typography-0 font-semibold">Opção 3</Text>
              </TouchableOpacity>

              {/* Botão fechar */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="bg-background-1 border border-outline-100 rounded px-5 h-10 flex-row items-center justify-center shadow-hard-1"
              >
                <Text className="text-typography-900 font-semibold">Fechar</Text>
              </TouchableOpacity>
            </View>
          </Box>
        </Pressable>
      </Modal>
    </View>
  );
}
