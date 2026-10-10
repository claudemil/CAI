import { Button } from "@/components/Button";
import { CourseCard } from "@/components/CourseCard";
import { Colors, Fonts, Spacing } from "@/constants/theme";
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
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerGreetingsContainer}>
            <Text style={styles.headerText}>Stastationes</Text>
            <Text style={styles.headerText}>
              Hello, {appUser?.username || "Guest User"}!
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
      </View>

      <ScrollView
        style={styles.styleView}
        contentContainerStyle={styles.bodyContainer}
      >
        <View style={styles.unitHeader}>
          <Text style={styles.unitHeaderText}>
            Unit 1 - Intro to Statistics
          </Text>
          <View>
            <Text style={styles.pillUnit}> 2/3 Done</Text>
          </View>
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
    color: Colors.light.textWhite,
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
    backgroundColor: Colors.light.headerBackgroundColor,
    // borderColor: Colors.light.activeTabBarBackground,
    // borderWidth: 1,
  },
  unitHeaderText: {
    fontSize: 16,
    paddingVertical: Spacing.two,
    fontFamily: Fonts.nunitoExtraBold,
    color: Colors.light.textWhite,
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
    backgroundColor: Colors.light.startStatusBackground,
    borderColor: Colors.light.background,
    borderWidth: 2,
    color: Colors.light.background,
    fontFamily: Fonts.nunitoBlack,
    fontSize: 16,
  },
  pillUnit: {
    alignSelf: "flex-start",
    padding: Spacing.two,
    borderWidth: 1,
    borderColor: Colors.light.textWhite,
    borderRadius: 999,
    color: Colors.light.textWhite,
    fontSize: 12,
    fontFamily: Fonts.nunitoExtraBold,
  },
  courseCardContainer: {
    width: "100%",
    gap: Spacing.two,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
