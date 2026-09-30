import { useCourse } from "@/app/context/course";
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
  const { handleCompleteCourse, getCourseStatus } = useCourse();

  const status = getCourseStatus(Id);

  if (!lessonData) {
    return <Text>"Lesson not found!"</Text>;
  }

  const handleRedirectLessons = () => {
    router.dismissAll();
    router.navigate("/(tabs)");
  };

  const handleStartQuiz = () => {
    router.push({
      pathname: "/(screens)/quiz/[Id]",
      params: { Id: Id },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleRedirectLessons}>
            <Text style={{ color: "white" }}>{"<--"}</Text>
          </TouchableOpacity>
          <Text
            style={{
              padding: Spacing.three,
              backgroundColor: "gray",
            }}
          >
            Icon
          </Text>
          <Text style={styles.bigHeaderText}>Lesson Complete!</Text>
          <Text
            style={[
              styles.headerText,
              { color: Colors.light.backgroundElement },
            ]}
          >
            {lessonData.title}
          </Text>
          <View style={styles.streakColumn}>
            <Text style={[styles.headerText, { alignSelf: "center" }]}>X</Text>
            <Text style={[styles.headerText, { alignSelf: "center" }]}>
              Day Streak
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.styleView}
        contentContainerStyle={[styles.bodyContainer]}
      >
        <View style={{ width: "75%" }}>
          <Text style={styles.bodyHeader}>Skills practiced</Text>
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
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => {
            handleCompleteCourse(Id);
            handleRedirectLessons;
          }}
        >
          <Text style={styles.startText}>Complete Lesson</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
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
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    backgroundColor: Colors.light.headerBackgroundColor,
    paddingHorizontal: Spacing.seven,
    paddingVertical: Spacing.three,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: Spacing.two,
    paddingHorizontal: Spacing.five,
  },
  bigHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.textPrimary,
    fontFamily: Fonts.sans,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.textPrimary,
    fontFamily: Fonts.sans,
  },
  streakColumn: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  objectivesContainer: {
    alignContent: "center",
    justifyContent: "center",
    gap: Spacing.two,
    marginBottom: Spacing.five,
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
  styleView: {
    flex: 1,
  },
  startButton: {
    backgroundColor: "blue",
    paddingVertical: Spacing.four,
    paddingHorizontal: Spacing.seven,
    borderRadius: 16,
    justifyContent: "center",
    width: "100%",
    marginHorizontal: Spacing.three,
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
    paddingVertical: Spacing.three,
  },
  bodyHeader: {
    fontFamily: Fonts.sans,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
