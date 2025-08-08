import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function Tab() {
  return (
    <View className="flex flex-row min-h-screen">
      <View className="flex-1 items-center pl-16 pr-10 pt-20 bg-primary">
        <Text className="text-8xl" variant="bold">
          Hello! 👋
        </Text>
        <Text variant="bold" className="mt-10 text-4xl">
          My name is Imron Rosdiana
        </Text>
        <Text variant="bold" className="text-4xl">
          I am a...
        </Text>
        <View></View>

        <View className="mt-40 p-5 w-auto md:max-w-[300px] bg-purple-700 rounded-[50%/50%] rotate-[-20deg] flex items-center justify-center border-2 shadow-[40px_30px_0px_rgb(0,0,0)]">
          <Text className="text-white text-center text-xl max-w-[80%] font-bold">
            Frontend & Mobile Developer
          </Text>
        </View>
      </View>
      <View className="max-w-4 border-2" />
      <View className="flex-1 pl-16 pr-10 pt-20 relative">
        <View className="relative bg-[#98FFE0] border-4 border-black p-8 shadow-[8px_8px_0px_rgb(0,0,0)]">
          {/* Profile image placeholder with border */}
          <View className="w-full aspect-[3/2] bg-gray-200 border-4 border-black mb-6">
            <View className="w-full h-full flex items-center justify-center">
              <Text className="text-gray-400">Profile Image Placeholder</Text>
            </View>
          </View>

          {/* Pixel art hand icon placeholder */}
          <View className="absolute -top-4 -left-4 w-16 h-16 bg-pink-500" />

          {/* Name tag with pink background */}
          <View className="self-end bg-pink-500 border-4 border-black py-2 px-4 w-fit shadow-[4px_4px_0px_rgb(0,0,0)]">
            <Text className="text-2xl font-bold">Imron Rosdiana</Text>
          </View>

          {/* Pixel art heart icon placeholder */}
          <View className="absolute top-16 -right-8 w-16 h-16 bg-pink-500" />

          {/* Pixel art hand icon placeholder */}
          <View className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500" />
        </View>
      </View>
    </View>
  );
}
