import { Button } from "@/components/Button";
import { CourseCard } from "@/components/CourseCard";
import { Colors, Fonts, Spacing } from "@/constants/theme";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../context/auth";
import { useCourse } from "../context/course";
import { lessons } from "../data/lessons";

export default function Index() {
  const router = useRouter();
  const { appUser } = useAuth();
  const lessonEntries = Object.entries(lessons);
  const { handleCompleteCourse, getCourseStatus } = useCourse();

  const handleRedirectQuiz = (Id: string) => {
    router.push({ pathname: "/(screens)/quiz/[Id]", params: { Id: Id } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        {...Colors.light.buttonGradient}
        style={styles.headerContainer}
      >
        <View style={styles.header}>
          <View style={styles.headerGreetingsContainer}>
            <Text style={styles.headerText}>Stastationes</Text>
            <Text style={styles.headerText}>
              Hello, {appUser?.username || "Guest User"}
            </Text>
          </View>
          <View>
            <Text style={styles.pillPrimary}>N DAY STREAK</Text>
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
            onPress={() => handleRedirectQuiz("intro-to-statistics")}
          ></Button>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.styleView}
        contentContainerStyle={styles.bodyContainer}
      >
        <View style={styles.unitHeader}>
          <Text style={styles.unitHeaderText}>
            Unit 1 - Intro to Statistics
          </Text>
          <BlurView intensity={20}>
            <Text style={styles.pillUnit}> 2/3 Done</Text>
          </BlurView>
        </View>
        <View style={styles.courseCardContainer}>
          {lessonEntries.map(([key, lesson], index) => {
            return (
              <CourseCard
                key={key}
                title={lesson.title}
                subTitle={lesson.subtitle}
                status={getCourseStatus(key)}
                id={key}
                onComplete={() => handleCompleteCourse(key)}
              ></CourseCard>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
    backgroundColor: Colors.light.headerBackgroundColor,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 32,
  },
  headerText: {
    fontSize: 24,
    color: Colors.light.textHeader,
    fontFamily: Fonts.nunitoBlack,
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
  bodyContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    marginTop: Spacing.two,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  unitHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 28,
    flexDirection: "row",
    width: "100%",
    borderRadius: 8,
    borderColor: Colors.light.activeTabBarBackground,
    borderWidth: 1,
  },
  unitHeaderText: {
    fontSize: 16,
    paddingVertical: Spacing.two,
    fontFamily: Fonts.nunitoExtraBold,
    color: Colors.light.textSecondary,
  },
  styleView: {
    flex: 1,
    width: "100%",
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
    fontFamily: Fonts.nunitoBlack,
  },
  pillUnit: {
    alignSelf: "flex-start",
    padding: Spacing.two,
    borderWidth: 1,
    borderColor: Colors.light.activeTabBarBackground,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    color: Colors.light.statusText,
    fontSize: 12,
    fontFamily: Fonts.nunitoBold,
  },
  courseCardContainer: {
    width: "100%",
    gap: Spacing.two,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
