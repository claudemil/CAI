import { useCourse } from "@/app/context/course";
import { Colors, Fonts, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
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
      <View>
        <LinearGradient
          {...Colors.light.buttonGradient}
          style={[
            styles.headerContainer,
            {
              gap: Spacing.two,
              flexDirection: "row",
            },
          ]}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={handleRedirectLessons}>
              <Text style={{ color: "white" }}>{"<--"}</Text>
            </TouchableOpacity>
            <Text style={styles.bigHeaderText}>Lesson Completed!</Text>
            <Text style={styles.headerText}>{lessonData.title}</Text>
            <View style={styles.streakColumn}>
              <Text style={[styles.headerText, { alignSelf: "center" }]}>
                X
              </Text>
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
        </LinearGradient>
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
        <View style={{ margin: 0, padding: 0 }}>
          <TouchableOpacity
            onPress={() => {
              handleCompleteCourse(Id);
              handleRedirectLessons();
            }}
          >
            <LinearGradient
              {...Colors.light.buttonGradient}
              style={[
                styles.startButton,
                {
                  gap: Spacing.two,
                  flexDirection: "row",
                },
              ]}
            >
              <Text style={styles.startText}>Complete Lesson</Text>
              <Ionicons
                name="arrow-forward"
                size={18}
                style={{ alignSelf: "center" }}
                color={Colors.light.textPrimary}
              ></Ionicons>
            </LinearGradient>
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
    backgroundColor: Colors.light.background,
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    backgroundColor: Colors.light.headerBackgroundColor,
    // paddingHorizontal: Spacing.seven,
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
    fontSize: 36,
    color: Colors.light.textPrimary,
    fontFamily: Fonts.nunitoBlack,
  },
  headerText: {
    fontSize: 18,
    color: Colors.light.textPrimary,
    fontFamily: Fonts.nunitoExtraBold,
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
    maxWidth: "100%",
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
    maxWidth: "75%",
    fontFamily: Fonts.sans,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginRight: Spacing.two,
  },
  styleView: {
    flex: 1,
    width: "100%",
  },
  startButton: {
    paddingVertical: Spacing.four,
    paddingHorizontal: Spacing.seven,
    borderRadius: 16,
    justifyContent: "center",
    width: "100%",
  },
  startText: {
    fontFamily: Fonts.nunitoBold,
    fontSize: 18,
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
    paddingHorizontal: Spacing.three,
  },
  bodyHeader: {
    fontFamily: Fonts.sans,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
