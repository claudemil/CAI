import { Colors, Fonts, Spacing } from "@/constants/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import { lessons } from "../../../data/lessons"; // Import your dictionary and type

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function LessonOutlineId() {
  const router = useRouter();
  const { Id } = useLocalSearchParams<{
    Id: string;
  }>();

  const lessonData = getLessonDataById(Id);

  if (!lessonData) {
    return <Text>"Lesson not found!"</Text>;
  }

  const handleShowLessonCompletion = (lessonData: any) => {
    router.push({
      pathname: "/(screens)/lesson/completion/[Id]",
      params: { Id: Id },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={{ padding: Spacing.three, backgroundColor: "blue" }}>
            Icon
          </Text>
          <Text>Lesson 1</Text>
          <Text>{lessonData.title}</Text>
          <Text>{lessonData.subtitle}</Text>
        </View>
      </View>
      <ScrollView
        style={styles.styleView}
        contentContainerStyle={[styles.bodyContainer]}
      >
        <View style={styles.aboutLessonCard}>
          <Text style={styles.aboutLessonHeader}>About this Lesson</Text>
          <Text style={styles.aboutLessonContent}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ alignSelf: "flex-start" }}>You will learn to:</Text>
        </View>
        <View style={styles.objectivesContainer}>
          {lessonData.objectives.map((objectives: string, index: number) => {
            return (
              <View key={index} style={styles.objectiveCard}>
                <Text style={styles.indexPill}>{index + 1}</Text>
                <Text style={styles.objectiveText}>{objectives}</Text>
              </View>
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleShowLessonCompletion}
        >
          <Text style={styles.startText}>Start Lesson</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function getLessonDataById(id: string) {
  return lessons[id];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
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
    backgroundColor: "#C8C8C8",
  },
  header: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    maxWidth: "50%",
    borderColor: Colors.light.borderColor,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.three,
    gap: Spacing.two,
  },
  indexPill: {
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 10,
    borderRadius: 999,
    backgroundColor: Colors.light.buttonPrimary,
    color: Colors.light.textPrimary,
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
