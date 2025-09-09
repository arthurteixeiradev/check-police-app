// ViaturaChecklistScreen.js
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const checklistItems = [
  { id: '1', label: 'Freios' },
  { id: '2', label: 'Suspensão e direção' },
  { id: '3', label: 'Luzes' },
  { id: '4', label: 'Condições Gerais' },
  { id: '5', label: 'Motor' },
];

type Viatura = {
  placa: string;
  modelo: string;
  tipo: string;
};

export default function ViaturaChecklistScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const viatura: Viatura = typeof params.viatura === 'string'
    ? JSON.parse(params.viatura)
    : params.viatura;

  // Inicializa todos os itens como marcados
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(checklistItems.map(item => [item.id, true]))
  );

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }: { item: { id: string; label: string } }) => (
    <TouchableOpacity
      className="flex-row justify-between items-center bg-white px-4 py-4 mb-2 rounded-lg"
      onPress={() => toggleCheck(item.id)}
    >
      <View className="flex-row items-center">
        <Ionicons
          name={checkedItems[item.id] ? 'checkbox' : 'square-outline'}
          size={24}
          color="#4CAF50"
        />
        <Text className="ml-4 text-base">{item.label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#999" />
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-[#F5F5F5] px-4 pt-4">
      <Text className="text-xl font-bold mb-4">
        Viatura: {viatura.placa} ({viatura.modelo} - {viatura.tipo})
      </Text>
      <FlatList
        data={checklistItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <TouchableOpacity
        className="absolute bottom-4 left-4 right-4 bg-green-600 py-4 rounded-lg items-center"
        onPress={() => router.replace('/home')}
      >
        <Text className="text-white text-lg font-bold">Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
