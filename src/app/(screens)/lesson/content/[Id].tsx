import { Colors, Fonts, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Lessons } from "../../../data/lessons";

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
          <View style={{ alignSelf: "center", width: "10%" }}>
            <TouchableOpacity onPress={handleReturn}>
              <Ionicons
                name="chevron-back"
                size={18}
                style={{ alignSelf: "center" }}
                color={Colors.light.textWhite}
              ></Ionicons>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "75%",
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
              gap: Spacing.two,
            }}
          >
            <Text style={styles.currentIndicator}></Text>
            <Text style={styles.inactiveIndicator}></Text>
            <Text style={styles.inactiveIndicator}></Text>
            <Text style={styles.inactiveIndicator}></Text>
            <Text style={styles.inactiveIndicator}></Text>
            <Text style={styles.inactiveIndicator}></Text>
          </View>
          <View style={{ width: "15%" }}>
            <Text
              style={{
                fontFamily: Fonts.nunitoBlack,
                color: Colors.light.textWhite,
                textAlign: "left",
                fontSize: 16,
              }}
            >
              1/6{" "}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.styleView}
        contentContainerStyle={[styles.bodyContainer]}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignContent: "center",
            gap: Spacing.two,
          }}
        >
          <Text style={styles.pillPrimary}>{lessonData.number}</Text>
          <Text
            style={[
              styles.headerText,
              { color: Colors.light.headerBackgroundColor },
            ]}
          >
            {lessonData.title}
          </Text>
        </View>
        <View style={styles.lessonCard}>
          {lessonData.content[0].map((paragraph, pIndex) => (
            <Text key={pIndex}>
              {paragraph.chunks.map((chunk, cIndex) => {
                if (typeof chunk === "string") {
                  return (
                    <Text key={cIndex} style={styles.defaultText}>
                      {chunk}
                    </Text>
                  );
                }
                return (
                  <Text
                    key={cIndex}
                    style={[
                      chunk.bold && styles.defaultBoldText,
                      chunk.color ? { color: chunk.color } : null,
                    ]}
                  >
                    {chunk.text}
                  </Text>
                );
              })}
            </Text>
          ))}
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          {lessonData.content[1].map((paragraph, pIndex) => (
            <Text key={pIndex}>
              {paragraph.chunks.map((chunk, cIndex) => {
                if (typeof chunk === "string") {
                  return (
                    <Text
                      style={[
                        paragraph.theme === "default"
                          ? styles.defaultText
                          : styles.oppositeText,
                        { textAlign: "left" },
                      ]}
                      key={cIndex}
                    >
                      {chunk}
                    </Text>
                  );
                }
                return (
                  <Text
                    key={cIndex}
                    style={[
                      chunk.bold && styles.oppositeBoldText,
                      { alignSelf: "flex-start", borderWidth: 5 },
                    ]}
                  >
                    {chunk.text}
                  </Text>
                );
              })}
            </Text>
          ))}
        </View>
        <View style={styles.lessonCard}>
          <View style={{ justifyContent: "center", alignSelf: "center" }}>
            <Text
              style={{
                width: 32,
                height: 32,
                paddingHorizontal: Spacing.one,
                paddingVertical: Spacing.one,
                textAlign: "center",
                fontFamily: Fonts.nunitoExtraBold,
                fontSize: 14,
                backgroundColor: Colors.light.headerBackgroundColor,
                borderColor: Colors.light.background,
                borderWidth: 2,
                borderRadius: 20,
                color: Colors.light.textWhite,
              }}
            >
              1
            </Text>
          </View>
          <View>
            {lessonData.content[2].map((paragraph, pIndex) => (
              <Text key={pIndex}>
                {paragraph.chunks.map((chunk, cIndex) => {
                  if (typeof chunk === "string")
                    return (
                      <Text
                        style={[
                          paragraph.theme === "default"
                            ? styles.defaultText
                            : styles.oppositeText,
                          { textAlign: "left" },
                        ]}
                      >
                        {chunk}
                      </Text>
                    );
                  return (
                    <Text
                      key={cIndex}
                      style={[
                        chunk.bold && styles.defaultBoldText,
                        { alignSelf: "flex-start", borderWidth: 5 },
                      ]}
                    >
                      {chunk.text}
                    </Text>
                  );
                })}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.oppositeLessonCard}>
          <View style={{ justifyContent: "center", alignSelf: "center" }}>
            <Text
              style={{
                width: 32,
                height: 32,
                paddingHorizontal: Spacing.one,
                paddingVertical: Spacing.one,
                textAlign: "center",
                fontFamily: Fonts.nunitoExtraBold,
                fontSize: 5,
                backgroundColor: Colors.light.headerBackgroundColor,
                borderRadius: 20,
                color: Colors.light.buttonSecondary,
              }}
            >
              2
            </Text>
          </View>
          <View>
            {lessonData.content[3].map((paragraph, pIndex) => (
              <Text key={pIndex}>
                {paragraph.chunks.map((chunk, cIndex) => {
                  if (typeof chunk === "string")
                    return (
                      <Text
                        style={[
                          paragraph.theme === "default"
                            ? styles.defaultText
                            : styles.oppositeText,
                          { textAlign: "left" },
                        ]}
                      >
                        {chunk}
                      </Text>
                    );
                  return (
                    <Text
                      key={cIndex}
                      style={[
                        chunk.bold && styles.oppositeBoldText,
                        { alignSelf: "flex-start", borderWidth: 5 },
                      ]}
                    >
                      {chunk.text}
                    </Text>
                  );
                })}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleShowLessonCompletion}
          >
            <Text style={styles.startText}>Next</Text>
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
  return Lessons[id];
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
    gap: Spacing.one,
    paddingHorizontal: Spacing.one,
    // paddingLeft: Spacing.three,
    paddingVertical: Spacing.two,
  },
  headerText: {
    fontSize: 24,
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
  lessonCard: {
    width: "100%",
    backgroundColor: Colors.light.headerBackgroundColor,
    borderRadius: 12,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  oppositeLessonCard: {
    width: "100%",
    borderColor: Colors.light.headerBackgroundColor,
    borderWidth: 2,
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
  defaultBoldText: {
    fontFamily: Fonts.nunitoExtraBold,
    fontSize: 16,
    color: "#2563eb", // Explicitly set color here so it doesn't inherit a conflicting parent color
  },
  defaultText: {
    fontFamily: Fonts.nunitoBold,
    fontSize: 16,
    color: Colors.light.textWhite,
  },
  oppositeText: {
    fontFamily: Fonts.nunitoBold,
    fontSize: 16,
    color: Colors.light.headerBackgroundColor,
  },
  oppositeBoldText: {
    fontFamily: Fonts.nunitoExtraBold,
    fontSize: 16,
    color: Colors.light.buttonSecondary,
    borderBottomWidth: 2,
    borderColor: Colors.light.headerBackgroundColor,
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
    textAlign: "center",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: 999,
    backgroundColor: Colors.light.buttonPrimary,
    color: Colors.light.textWhite,
    fontFamily: Fonts.nunitoBlack,
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
  currentIndicator: {
    width: 48,
    height: 24,
    borderRadius: 20,
    backgroundColor: "#007AFF",
  },
  inactiveIndicator: {
    width: 24,
    height: 24,
    borderRadius: 20,
    backgroundColor: Colors.light.backgroundElement,
  },
});
