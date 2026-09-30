import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="quiz/[Id]"
        options={{
          title: "Quiz Active",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="lesson/completion/[Id]"
        options={{
          title: "Lesson Completion",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="lesson/outline/[Id]"
        options={{
          title: "Lesson Outline",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
}
