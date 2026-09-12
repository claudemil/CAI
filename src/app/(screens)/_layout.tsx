import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack
      screenOptions={{
        //GLobal styles for all the screens in this layout
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
        name="quiz/[quizId]"
        options={{
          title: "Quiz Active",
          headerShown: true,
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
}
