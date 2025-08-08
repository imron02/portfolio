import { TabList, TabSlot, Tabs as TabsUI, TabTrigger } from "expo-router/ui";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

const TabLabel = ({ label }: { label: string }) => (
  <Text className="text-3xl" style={{ fontFamily: "K2D-ExtraBold" }}>
    {label}
  </Text>
);

export default function TabLayout() {
  return (
    <TabsUI>
      <View className="mt-24">
        <TabSlot />
      </View>
      <TabList asChild>
        <View className="absolute top-0 left-0 right-0 h-24 !justify-center items-center gap-20 bg-white">
          <TabTrigger name="home" href="/(tabs)">
            <TabLabel label="Home" />
          </TabTrigger>
          <TabTrigger name="setting" href="/(tabs)/settings">
            <TabLabel label="My Skills" />
          </TabTrigger>
        </View>
      </TabList>
    </TabsUI>
  );
}
