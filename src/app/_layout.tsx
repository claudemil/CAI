import { Stack } from "expo-router";
import { CourseProvider } from "./context/course";
export default function Layout() {
  return (
    <CourseProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
    </CourseProvider>
  );
}
