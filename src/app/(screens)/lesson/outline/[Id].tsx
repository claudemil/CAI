import { Colors, Fonts, Spacing } from "@/constants/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import { lessons } from "../../../data/lessons";

import { Ionicons } from "@expo/vector-icons";
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

  const handleShowLessonCompletion = () => {
    router.push({
      pathname: "/(screens)/lesson/completion/[Id]",
      params: { Id: Id },
    });
  };

  const handleReturn = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={{ alignSelf: "center" }}>
            <TouchableOpacity onPress={handleReturn}>
              <Ionicons
                name="chevron-back"
                size={24}
                // style={{ alignSelf: "center" }}
                color={Colors.light.textWhite}
              ></Ionicons>
            </TouchableOpacity>
          </View>

          {/* <Text style={{ padding: Spacing.three, backgroundColor: "blue" }}>
            Icon
          </Text> */}
          <View>
            <Text style={styles.headerText}>Lesson 1</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.styleView}
        contentContainerStyle={[styles.bodyContainer]}
      >
        <View style={{ gap: 0, alignSelf: "flex-start" }}>
          <Text style={styles.bodyHeaderText}>{lessonData.title}</Text>
          <Text style={styles.mutedHeaderText}>{lessonData.subtitle}</Text>
        </View>
        <View style={styles.aboutLessonCard}>
          <Text style={styles.aboutLessonHeader}>About this Lesson</Text>
          <Text style={styles.aboutLessonContent}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum
          </Text>
        </View>
        <View style={styles.objectivesContainer}>
          <Text style={styles.bodyHeader}>You will learn to:</Text>
          {lessonData.objectives.map((objectives: string, index: number) => {
            return (
              <View key={index} style={styles.objectiveCard}>
                <Text style={styles.indexPill}>{index + 1}</Text>
                <Text style={styles.objectiveText}>{objectives}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleShowLessonCompletion}
          >
            <Text style={styles.startText}>Start Lesson</Text>
            <Ionicons
              name="arrow-forward"
              size={24}
              color={Colors.light.textWhite}
            ></Ionicons>
          </TouchableOpacity>
        </View>
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    backgroundColor: Colors.light.headerBackgroundColor,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    gap: Spacing.two,
    paddingHorizontal: Spacing.five,
    paddingLeft: Spacing.three,
    paddingTop: Spacing.three,
  },
  headerText: {
    fontSize: 32,
    color: Colors.light.textWhite,
    fontFamily: Fonts.nunitoBlack,
  },
  mutedHeaderText: {
    fontSize: 16,
    color: Colors.light.headerBackgroundColor,
    fontFamily: Fonts.nunitoExtraBold,
  },
  bodyHeaderText: {
    fontSize: 24,
    color: Colors.light.headerBackgroundColor,
    fontFamily: Fonts.nunitoBlack,
  },
  aboutLessonCard: {
    // borderWidth: 2,
    // borderColor: Colors.light.headerBackgroundColor,
    width: "100%",
    backgroundColor: Colors.light.headerBackgroundColor,
    borderRadius: 12,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  aboutLessonHeader: {
    fontFamily: Fonts.nunitoExtraBold,
    color: Colors.light.textWhite,
    fontSize: 18,
    marginBottom: Spacing.one,
  },
  aboutLessonContent: {
    fontFamily: Fonts.nunitoBold,
    color: Colors.light.textWhite,
    fontSize: 12,
    marginBottom: Spacing.three,
  },
  bodyHeader: {
    fontFamily: Fonts.nunitoExtraBold,
    fontSize: 18,
    color: Colors.light.headerBackgroundColor,
    paddingBottom: Spacing.two,
    paddingRight: Spacing.four,
    borderBottomWidth: 1,
    borderColor: Colors.light.headerBackgroundColor,
    alignSelf: "flex-start",
    marginBottom: Spacing.two,
  },
  objectivesContainer: {
    width: "100%",
    // paddingHorizontal: Spacing.five,
    alignContent: "center",
    justifyContent: "center",
    gap: Spacing.two,
  },
  objectiveCard: {
    width: "85%",
    borderColor: Colors.light.headerBackgroundColor,
    borderWidth: 2,
    borderRadius: 16,
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.three,
  },
  indexPill: {
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 10,
    borderRadius: 999,
    backgroundColor: Colors.light.headerBackgroundColor,
    color: Colors.light.textWhite,
    fontFamily: Fonts.nunitoExtraBold,
    alignSelf: "center",
    marginLeft: Spacing.one,
    marginRight: Spacing.two,
  },
  objectiveText: {
    fontFamily: Fonts.nunitoBold,
    color: Colors.light.headerBackgroundColor,
    fontSize: 12,
    alignSelf: "center",
    marginRight: Spacing.two,
    width: "85%",
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
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
  },
  startButton: {
    backgroundColor: Colors.light.headerBackgroundColor,
    paddingVertical: Spacing.four,
    borderRadius: 16,
    justifyContent: "center",
    width: "75%",
    flexDirection: "row",
    gap: Spacing.two,
    alignSelf: "center",
  },
  startText: {
    fontFamily: Fonts.nunitoExtraBold,
    fontSize: 24,
    color: Colors.light.textWhite,
    alignSelf: "center",
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: Spacing.three,
    marginTop: Spacing.two,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
});
