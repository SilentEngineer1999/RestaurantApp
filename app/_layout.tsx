import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Search" }} />
      <Stack.Screen
        name="ResultsShowScreen"
        options={{ title: "Restaurant Details" }}
      />
    </Stack>
  );
}
