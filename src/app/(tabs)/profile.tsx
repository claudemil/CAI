import { Colors, Fonts, Spacing } from "@/constants/theme";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.profileContainer}></View>
          <View>
            <Text style={styles.headerText}>TUNG SAHUR</Text>
          </View>
          <Text style={styles.pillUnit}>N DAY STREAK</Text>
        </View>
      </View>
      <ScrollView
        style={styles.styleView}
        contentContainerStyle={styles.bodyContainer}
      >
        <ScrollView>
          <Text style={{ alignSelf: "center" }}>Achievements</Text>
          <View style={styles.achievementCardContainer}>
            <View style={styles.achievementCardRow}>
              <View style={styles.achievementCard}>
                <Text
                  style={{ backgroundColor: "gray", padding: Spacing.three }}
                >
                  Icon
                </Text>
                <Text>First Lesson</Text>
              </View>
              <View style={styles.achievementCard}>
                <Text
                  style={{ backgroundColor: "gray", padding: Spacing.three }}
                >
                  Icon
                </Text>
                <Text>Statistical Newbie</Text>
              </View>
            </View>
            <View style={styles.achievementCardRow}>
              <View style={styles.achievementCard}>
                <Text
                  style={{ backgroundColor: "gray", padding: Spacing.three }}
                >
                  Icon
                </Text>
                <Text>Statistician</Text>
              </View>
              <View style={styles.achievementCard}>
                <Text
                  style={{ backgroundColor: "gray", padding: Spacing.three }}
                >
                  Icon
                </Text>
                <Text>Data Analyst</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <Text style={{ alignSelf: "center" }}>Your Learning Stats</Text>
        <View style={{ gap: Spacing.two }}>
          <View style={styles.statCard}>
            <Text style={styles.statBadge}>1</Text>
            <Text style={styles.statText}>Days Active</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statBadge}>2</Text>
            <Text style={styles.statText}>Questions Answered</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
    backgroundColor: "#C8C8C8",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: Spacing.two,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.textHeader,
    fontFamily: Fonts.sans,
  },
  profileContainer: {
    backgroundColor: Colors.light.backgroundElement,
    width: 100,
    height: 100,
    borderRadius: 999,
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
    alignSelf: "center",
  },
  achievementCardRow: {
    marginVertical: Spacing.two,
    flexDirection: "row",
    flex: 1,
    width: "100%",
    gap: Spacing.three,
  },
  achievementCardContainer: {
    width: "100%",
  },
  achievementCard: {
    backgroundColor: "#f020f0",
    padding: Spacing.four,
    gap: Spacing.two,
  },
  statCard: {
    flexDirection: "row",
    gap: Spacing.three,
    width: "100%",
    paddingVertical: Spacing.two,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: Colors.light.backgroundElement,
  },
  statBadge: {
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    fontSize: 10,
    color: Colors.light.textPrimary,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    marginLeft: Spacing.two,
    backgroundColor: Colors.light.statusText,
    borderRadius: 999,
  },
  statText: {
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    fontSize: 12,
    color: Colors.light.textSecondary,
    alignSelf: "center",
    marginRight: Spacing.six,
  },
});
