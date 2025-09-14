import { Bell, Bolt, CircleUserRound } from "lucide-react-native";
import { Text, View } from "react-native";

export function StatusBar() {
    return (
        <View className="h-32 p-6 justify-between">
            <View className="flex-row justify-between items-center">
                <CircleUserRound size={25} />
                <View className="flex-row items-center justify-center gap-6">
                    <Bell size={25} />
                    <Bolt size={25} />
                </View>
            </View>
            <Text className="text-2xl font-bold">SD Fulaninho</Text>
        </View>
    );
}
