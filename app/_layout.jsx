import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(screens)" options={{}}></Stack.Screen>
    <Stack.Screen name="+not-found" options={{}}></Stack.Screen>
  </Stack >;
}