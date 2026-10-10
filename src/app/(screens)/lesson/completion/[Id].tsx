import { useCourse } from "@/app/context/course";
import { Colors, Fonts, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
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
      <View
        style={[
          styles.headerContainer,
          {
            gap: Spacing.two,
            flexDirection: "row",
          },
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.bigHeaderText}>Lesson Completed!</Text>
          <Text style={styles.headerText}>{lessonData.title}</Text>
          <View style={styles.streakColumn}>
            <Text style={[styles.headerText, { alignSelf: "center" }]}>X</Text>
            <Text style={[styles.headerText, { alignSelf: "center" }]}>
              Day Streak
            </Text>
          </View>
          {/* <Text
            style={{
              padding: Spacing.three,
              backgroundColor: "gray",
            }}
          >
            Icon
          </Text> */}
        </View>
      </View>
      <ScrollView
        style={styles.styleView}
        contentContainerStyle={[styles.bodyContainer]}
      >
        <View style={{ width: "100%" }}>
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
        <View style={{ width: "75%", alignSelf: "center" }}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => {
              handleCompleteCourse(Id);
              handleRedirectLessons();
            }}
          >
            <Text style={styles.startText}>Complete Lesson</Text>
            <Ionicons
              name="arrow-forward"
              size={24}
              style={{ alignSelf: "center" }}
              color={Colors.light.headerBackgroundColor}
            ></Ionicons>
          </TouchableOpacity>
        </View>
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
    backgroundColor: Colors.light.headerBackgroundColor,
  },
  headerContainer: {
    width: "100%",
    height: "30%",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: Spacing.three,
    backgroundColor: Colors.light.headerBackgroundColor,
    marginBottom: Spacing.three,
    // paddingHorizontal: Spacing.seven,
    // paddingVertical: Spacing.three,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: Spacing.two,
    paddingHorizontal: Spacing.five,
  },
  bigHeaderText: {
    fontSize: 36,
    color: Colors.light.textWhite,
    fontFamily: Fonts.nunitoBlack,
  },
  headerText: {
    fontSize: 18,
    color: Colors.light.textWhite,
    fontFamily: Fonts.nunitoExtraBold,
  },
  streakColumn: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  objectivesContainer: {
    width: "85%",
    alignContent: "center",
    justifyContent: "center",
    gap: Spacing.two,
    marginBottom: Spacing.five,
  },
  objectiveCard: {
    maxWidth: "100%",
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.headerBackgroundColor,
    borderWidth: 2,
    borderRadius: 16,
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    gap: Spacing.two,
  },
  objectiveText: {
    width: "75%",
    fontFamily: Fonts.nunitoBold,
    fontSize: 16,
    color: Colors.light.headerBackgroundColor,
    alignSelf: "center",
    marginRight: Spacing.two,
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
  styleView: {
    flex: 1,
    height: "70%",
    width: "85%",
  },
  startButton: {
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.headerBackgroundColor,
    paddingVertical: Spacing.four,
    paddingHorizontal: Spacing.seven,
    borderRadius: 16,
    justifyContent: "center",
    width: "100%",
    gap: Spacing.two,
    flexDirection: "row",
  },
  startText: {
    fontFamily: Fonts.nunitoBold,
    fontSize: 24,
    color: Colors.light.headerBackgroundColor,
    alignSelf: "center",
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: Spacing.three,
    // marginTop: Spacing.five,
    paddingVertical: Spacing.five,
    paddingHorizontal: Spacing.five,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: Colors.light.background,
  },
  bodyHeader: {
    fontFamily: Fonts.nunitoExtraBold,
    fontSize: 18,
    color: Colors.light.textWhite,
    alignSelf: "flex-start",
  },
});
