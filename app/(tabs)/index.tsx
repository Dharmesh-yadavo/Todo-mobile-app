import useTheme from "@/hooks/useTheme";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View className="flex-1 justify-center items-center bg-red-300 ">
      <Text className="">Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Tottle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}
