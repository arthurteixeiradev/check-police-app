// src/components/CardNotification.tsx
import React, { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { Card } from '@/components/ui/card';
import { ArrowRightIcon } from "lucide-react-native";
import {Heading,HStack,Icon, Text } from "@gluestack-ui/themed";
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';




type NotificationProps = {
  title: string;
  description: string;
  createdAt: string;
};

export default function CardNotification({
  title,
  description,
  createdAt,
}: NotificationProps) {
    
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
        <Pressable onPress={() => setModalVisible(true)}>
            {({ pressed }) => (
                <Card
                className={`flex-1 pt-6 md:p-8 text-center md:text-left space-y-4 ${
                    pressed ? "bg-gray-200" : "bg-white"
                }`}
                >
                <Icon
                    as={ArrowRightIcon}
                    className="sm text-info-600 mt-0.5 ml-0.5"
                />
                <Heading className="mb-4">{title}</Heading>

                <Text className="text-sm font-normal mb-2 text-typography-700">
                    {createdAt}
                </Text>
                </Card>
            )}
        </Pressable>
        <Divider className="my-0.6 bg-gray-200" />


        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                <View className="bg-white p-10 rounded-lg max-w-[400px]">
                    <Text className="text-lg font-bold mb-2 p">{title}</Text>
                    <Text className="mb-4">{description}</Text>
                
                    <Button variant="solid" size="md" action="primary" className="pressed ? 'text-pink-400' : 'text-amber-400'" onPress={() => setModalVisible(false)}>
                        <ButtonText>Fechar</ButtonText>
                    </Button>
            
                </View>
            </View>
        </Modal>
    </>
  );
}


