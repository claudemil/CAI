import { Button } from "@/components/Button";
import { Colors, Fonts, Spacing } from "@/constants/theme";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Quiz() {
  const { quizId } = useLocalSearchParams<{ quizId: string }>();

  const quizData = getQuizDataById("math-101");

  if (!quizData) {
    return <Text>"Quiz not found!"</Text>;
  }

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerGreetingsContainer}>
            <Text style={styles.headerText}>Stastationes</Text>
            <Text style={styles.headerText}>Hello, User!</Text>
          </View>
          <View>
            <Text style={[styles.pillPrimary, {}]}>N DAY STREAK</Text>
          </View>
        </View>
        <View style={styles.headerButtons}>
          <Button
            label="Learn"
            size="medium"
            state="primary"
            page="index"
          ></Button>
          <Button
            label="Quiz"
            size="medium"
            state="secondary"
            page="index"
          ></Button>
        </View>
        <Text style={{ fontWeight: "800" }}>{quizData.title}</Text>
      </View>
      <ScrollView
        style={styles.styleView}
        contentContainerStyle={[
          styles.bodyContainer,
          { backgroundColor: "#000000" },
        ]}
      >
        <View style={styles.progressRow}>
          <Text style={{ backgroundColor: "#000000" }}>
            This will be a line
          </Text>
          <Text>1/3</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "800" }}>{quizData.title}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function getQuizDataById(id: string) {
  const quizzes: Record<string, any> = {
    "math-101": { title: "Basic Math", type: "multiple-choice", questions: [] },
    "history-rules": {
      title: "True History",
      type: "true-false",
      questions: [],
    },
  };
  return quizzes[id];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  headerContainer: {
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    backgroundColor: "#C8C8C8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 32,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.textHeader,
    fontFamily: Fonts.sans,
  },
  headerGreetingsContainer: {
    justifyContent: "space-between",
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: Spacing.two,
    gap: Spacing.two,
  },
  pillPrimary: {
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 8,
    borderRadius: 200,
    alignSelf: "flex-start",
    backgroundColor: Colors.light.buttonPrimary,
    color: Colors.light.textPrimary,
    fontFamily: Fonts.sans,
    fontWeight: "bold",
  },
  styleView: {
    flex: 1,
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    marginTop: Spacing.two,
    paddingVertical: Spacing.five,
  },
  progressRow: {
    flex: 1,
    gap: Spacing.three,
  },
});
