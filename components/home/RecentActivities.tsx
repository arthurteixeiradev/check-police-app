import { Text, View } from "react-native";

export function RecentActivities() {
      const activities = [
        {
          title: "Check-List",
          description: "Sargento Silva finalizou checklist da VTR PM-0171 às 08:02",
        },
        {
          title: "Manutenção",
          description: "Viatura PM-0306 entrou em manutenção",
        },
        {
          title: "Check-List",
          description: "Soldado Oliveira finalizou checklist da VTR PM-0307 às 10:15.",
        },
      ];
  
      return (
        <View className="bg-[#f7fbf6] p-2">
          <Text className="text-base font-bold text-left mb-2">Últimas Atividades</Text>
          {activities.map((item, idx) => (
            <View
              key={idx}
              className="border border-[#dbe5d3] rounded mb-2 p-2 bg-white"
            >
              <Text className="font-semibold text-[15px] mb-1">{item.title}</Text>
              <Text className="text-[13px] text-[#444]">{item.description}</Text>
            </View>
          ))}
        </View>
      );
    }