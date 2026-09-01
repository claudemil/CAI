import { Button } from "@/components/Button";
import { CourseCard } from "@/components/CourseCard";
import { Colors, Fonts, Spacing } from "@/constants/theme";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerGreetingsContainer}>
            <Text
              style={[
                styles.headerText,
                { color: Colors.light.textHeader, fontFamily: Fonts.sans },
              ]}
            >
              Stastationes
            </Text>
            <Text
              style={[
                styles.headerText,
                { color: Colors.light.textHeader, fontFamily: Fonts.sans },
              ]}
            >
              Hello, User!
            </Text>
          </View>
          <View>
            <Text style={[styles.pillPrimary, {}]}>N DAY STREAK</Text>
          </View>
        </View>
        <View style={styles.headerButtons}>
          <Button label="Learn" size="medium" state="primary"></Button>
          <Button label="Quiz" size="medium" state="secondary"></Button>
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
          <Text style={styles.pillUnit}> 2/3 Done</Text>
        </View>
        <CourseCard
          title="Intro to Statistics"
          subTitle="Types & Classification"
          status="Completed"
        ></CourseCard>
        <CourseCard
          title="Measures of Tendency"
          subTitle="Mean, Median & Mode"
          status="Start"
        ></CourseCard>
        <CourseCard
          title="Correlation & Covariance"
          subTitle="Relationships in Data"
          status="Locked"
        ></CourseCard>
        <View style={styles.unitHeader}>
          <Text style={styles.unitHeaderText}>
            Unit 1 - Intro to Statistics
          </Text>
          <Text style={styles.pillUnit}> 2/3 Done</Text>
        </View>
        <CourseCard
          title="Intro to Statistics"
          subTitle="Types & Classification"
          status="Completed"
        ></CourseCard>
        <CourseCard
          title="Measures of Tendency"
          subTitle="Mean, Median & Mode"
          status="Start"
        ></CourseCard>
        <CourseCard
          title="Correlation & Covariance"
          subTitle="Relationships in Data"
          status="Locked"
        ></CourseCard>
        <View style={styles.unitHeader}>
          <Text style={styles.unitHeaderText}>
            Unit 1 - Intro to Statistics
          </Text>
          <Text style={styles.pillUnit}> 2/3 Done</Text>
        </View>
        <CourseCard
          title="Intro to Statistics"
          subTitle="Types & Classification"
          status="Completed"
        ></CourseCard>
        <CourseCard
          title="Measures of Tendency"
          subTitle="Mean, Median & Mode"
          status="Start"
        ></CourseCard>
        <CourseCard
          title="Correlation & Covariance"
          subTitle="Relationships in Data"
          status="Locked"
        ></CourseCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    backgroundColor: "#C8C8C8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 32,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerGreetingsContainer: {
    justifyContent: "space-between",
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 32,
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    marginTop: Spacing.two,
    paddingVertical: Spacing.five,
  },
  unitHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 28,
    flexDirection: "row",
    borderRadius: 8,
    borderColor: "#C8C8C8",
    borderWidth: 1,
  },
  unitHeaderText: {
    fontSize: 16,
    paddingVertical: Spacing.two,
    fontWeight: "bold",
    fontFamily: Fonts.sans,
    color: Colors.light.textSecondary,
  },
  styleView: {
    flex: 1,
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
    fontFamily: Fonts.sans,
    fontWeight: "bold",
  },
  pillUnit: {
    padding: Spacing.two,
    borderRadius: 999,
    backgroundColor: Colors.light.statusColor,
    color: Colors.light.statusText,
    fontSize: 12,
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
