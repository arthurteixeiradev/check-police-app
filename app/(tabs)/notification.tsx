import React from "react";
import { FlatList, SafeAreaView, View, Text} from "react-native";
import CardNotification from "@/components/notification/CardNotification";
import { mockNotifications } from "@/mocks/notification";

export default function NotificationScreen() {
    return (
            <FlatList
                data={mockNotifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <>
                    <CardNotification
                        title={item.title}
                        description={item.description}
                        createdAt={item.createdAt}
                    />

                </>
                )}
            />
    )


}
