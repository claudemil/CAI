import { useAuth } from "@/app/context/auth";
import { Quiz, Quizzes } from "@/app/data/quizzes";
import { Button } from "@/components/Button";
import { Colors, Fonts, Spacing } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function QuizScreen() {
  const router = useRouter();
  const { appUser } = useAuth();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctFlag, setCorrectFlag] = useState<boolean>(false);
  const { Id } = useLocalSearchParams<{ Id: string }>();

  // fetches data from quizzes.ts
  const quizData: Quiz | undefined = Id ? Quizzes[Id] : undefined;

  if (!quizData) {
    return <Text>"Quiz not found!"</Text>;
  }

  const checkAnswer = (answer: string) => {
    if (quizData.correctAnswer == answer) {
      setCorrectFlag(true);
    } else {
      setCorrectFlag(false);
    }
  };

  const handleRedirectLessons = () => {
    router.replace({ pathname: "/(tabs)" });
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
            onPress={handleRedirectLessons}
          ></Button>
          <Button
            label="Quiz"
            size="medium"
            state="secondary"
            page="index"
          ></Button>
        </View>
      </LinearGradient>
      <ScrollView
        style={styles.styleView}
        contentContainerStyle={styles.bodyContainer}
      >
        <View style={styles.progressRow}>
          <Text style={{ backgroundColor: "#000000" }}>
            This will be a line
          </Text>
          <Text>1/3</Text>
        </View>
        <View style={styles.questionCard}>
          <View
            style={{
              flexDirection: "row",
              gap: Spacing.two,
            }}
          >
            <Text>Q1</Text>
            <Text>{quizData.type}</Text>
          </View>
          <View>
            <Text>{quizData.questions[0]}</Text>
          </View>
        </View>
        <View style={styles.answerCardRow}>
          {quizData.answers.map((answer: string, index: number) => {
            const isSelected = selectedAnswer === answer;
            const letterLabel = String.fromCharCode(65 + index);

            return (
              <TouchableOpacity
                key={index}
                style={styles.answerCard}
                onPress={() => setSelectedAnswer(answer)}
              >
                <Text
                  style={[
                    styles.answerText,
                    isSelected && styles.answerTextSelected,
                  ]}
                >
                  {letterLabel}
                </Text>
                <Text>{answer}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          <TouchableOpacity
            style={styles.checkAnswerButton}
            onPress={() => checkAnswer(selectedAnswer!)}
          >
            <Text style={styles.checkAnswerText}>Check Answer</Text>
            {correctFlag && <Text>Correct!</Text>}
          </TouchableOpacity>
        </View>
        {correctFlag && (
          <Modal>
            <TouchableOpacity
              style={styles.checkAnswerButton}
              onPress={() => handleRedirectLessons}
            ></TouchableOpacity>
          </Modal>
        )}
      </ScrollView>
    </SafeAreaView>
  );
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
  styleView: {
    flex: 1,
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: Spacing.three,
    marginTop: Spacing.two,
    paddingVertical: Spacing.three,
  },
  progressRow: {
    // flex: 1,
    flexDirection: "row",
    gap: Spacing.three,
  },
  questionCard: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.borderColor,
    borderRadius: 16,
    padding: Spacing.four,
    overflow: "hidden",
    flex: 1,
  },
  answerCard: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.borderColor,
    borderRadius: 16,
    paddingVertical: Spacing.four,
    paddingHorizontal: Spacing.four,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: Spacing.two,
  },
  answerText: {
    padding: Spacing.two,
    paddingHorizontal: Spacing.three,
    marginHorizontal: Spacing.two,
    borderRadius: 999,
    backgroundColor: Colors.light.statusColor,
    color: Colors.light.statusText,
    fontSize: 12,
    fontFamily: Fonts.sans,
    fontWeight: "bold",
  },
  answerTextSelected: {
    color: Colors.light.statusText,
    fontWeight: "600",
    padding: Spacing.two,
    paddingHorizontal: Spacing.three,
    marginHorizontal: Spacing.two,
    borderRadius: 999,
    backgroundColor: "#8bf187",
    fontSize: 12,
    fontFamily: Fonts.sans,
  },
  answerCardRow: {
    gap: Spacing.three,
    width: "100%",
  },
  checkAnswerButton: {
    backgroundColor: "blue",
    padding: Spacing.four,
    justifyContent: "center",
  },
  checkAnswerText: {
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
