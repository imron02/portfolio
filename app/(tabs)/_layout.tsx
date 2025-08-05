import { Text } from "@/components/nativewindui/Text";
import { isWeb } from "@/lib/platform";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { TabList, TabSlot, Tabs as TabsUI, TabTrigger } from "expo-router/ui";
import { View } from "react-native";

export default function TabLayout() {
  if (isWeb()) {
    return (
      <TabsUI>
        <TabSlot />
        <TabList asChild>
          <View className="absolute top-0 left-0 right-0 h-24 !justify-center items-center gap-20 bg-white">
            <TabTrigger name="home" href="/(tabs)">
              <Text variant="title1">Home</Text>
            </TabTrigger>
            <TabTrigger name="setting" href="/(tabs)/settings"> 
              <Text variant="title1">Setting</Text>
            </TabTrigger>
          </View>
        </TabList>
      </TabsUI>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: !isWeb(),
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
