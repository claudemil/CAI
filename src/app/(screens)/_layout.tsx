import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack
      screenOptions={{
        // 🌟 Global styles for all screens inside this folder
        headerStyle: {
          backgroundColor: "#ffffff", // Change header background color
        },
        headerTintColor: "#000000", // Change back button and title color
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackTitle: "Back", // Label next to the iOS back arrow
      }}
    >
      {/* 1. The Dynamic Quiz Screen Configuration */}
      <Stack.Screen
        name="quiz/[quizId]"
        options={{
          title: "Quiz Active", // Default title shown in the top header
          headerShown: true, // Shows the top bar with a Back button
          gestureEnabled: false, // Optional: Prevents swiping back mid-quiz
        }}
      />

      {/* Add more screens here as you create them, for example: */}
      {/* <Stack.Screen name="settings" options={{ title: 'Settings' }} /> */}
    </Stack>
  );
}
