import { Colors, Fonts, Spacing } from "@/constants/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Lesson, lessons } from "../../../data/lessons";

export default function Id() {
  const router = useRouter();
  const { Id } = useLocalSearchParams<{ Id: string }>();
  const lessonData: Lesson | undefined = Id ? lessons[Id] : undefined;

  if (!lessonData) {
    return <Text>"Lesson not found!"</Text>;
  }

  const handleStartQuiz = () => {
    router.push({
      pathname: "/(screens)/quiz/[Id]", // The literal filename structure
      params: { Id: Id },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text
            style={{
              padding: Spacing.three,
              backgroundColor: "gray",
            }}
          >
            Icon
          </Text>
          <Text>Lesson Complete!</Text>
          <Text>{lessonData.title}</Text>
          <View style={styles.streakColumn}>
            <Text style={{ alignSelf: "center" }}>X</Text>
            <Text>Day Streak</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.styleView}
        contentContainerStyle={[styles.bodyContainer]}
      >
        <View style={{ width: "75%" }}>
          <Text style={{ alignSelf: "flex-start" }}>Skills practiced</Text>
        </View>
        <View style={styles.objectivesContainer}>
          {lessonData.objectives.map((objectives: string, index: number) => {
            return (
              <View key={index} style={styles.objectiveCard}>
                <Text style={styles.checkPill}>✔</Text>
                <Text style={styles.objectiveText}>{objectives}</Text>
              </View>
            );
          })}
        </View>
        <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
          <Text style={styles.startText}>Start Quiz</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function getLessonCompletionDataById(id: string) {
  const lessons: Record<string, any> = {
    statistics: {
      title: "Intro to Statistics",
      subtitle: "Type & Classifications",
      objectives: [
        "Distinguish the difference  Descriptive vs Inferential Statistics",
        "Classify Quantitative and Qualitative Data",
        "Understand Predictive and Prescriptive Statistics",
      ],
    },
    "history-rules": {
      title: "True History",
      type: "true-false",
      questions: [],
    },
  };
  return lessons[id];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  headerContainer: {
    paddingVertical: 12,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    backgroundColor: Colors.light.headerBackgroundColor,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: Spacing.two,
    paddingHorizontal: Spacing.five,
    paddingLeft: Spacing.three,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.textHeader,
    fontFamily: Fonts.sans,
  },
  streakColumn: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  aboutLessonCard: {
    borderWidth: 1,
    borderColor: Colors.light.borderColor,
    borderRadius: 12,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    maxWidth: "50%",
  },
  aboutLessonHeader: {
    fontFamily: Fonts.sans,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: Spacing.three,
  },
  aboutLessonContent: {
    fontFamily: Fonts.sans,
    fontSize: 12,
    marginBottom: Spacing.three,
  },
  objectivesContainer: {
    alignContent: "center",
    justifyContent: "center",
    gap: Spacing.two,
  },
  objectiveCard: {
    maxWidth: "75%",
    borderColor: Colors.light.borderColor,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.three,
    gap: Spacing.two,
  },
  checkPill: {
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 10,
    borderRadius: 999,
    backgroundColor: Colors.light.completedBackground,
    color: Colors.light.completedStatusText,
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    alignSelf: "center",
    marginRight: Spacing.two,
  },
  objectiveText: {
    fontFamily: Fonts.sans,
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
    marginRight: Spacing.two,
  },
  pillPrimary: {
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 10,
    borderRadius: 999,
    alignSelf: "flex-start",
    backgroundColor: Colors.light.buttonPrimary,
    color: Colors.light.textPrimary,
    fontFamily: Fonts.sans,
    fontWeight: "bold",
  },
  styleView: {
    flex: 1,
  },
  startButton: {
    backgroundColor: "blue",
    padding: Spacing.four,
    borderRadius: 16,
    justifyContent: "center",
    width: "50%",
  },
  startText: {
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    color: "#ffffff",
    alignSelf: "center",
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: Spacing.three,
    marginTop: Spacing.two,
    paddingVertical: Spacing.five,
  },
});
