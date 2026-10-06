import { Colors, Fonts, Spacing } from "@/constants/theme";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../context/auth";
export default function Profile() {
  const { appUser, logout } = useAuth();
  const router = useRouter();
  const handleRedirectRegister = () => {
    router.navigate({ pathname: "/(auth)/register", params: undefined });
  };

  const handleLogout = async () => {
    logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        {...Colors.light.buttonGradient}
        style={styles.headerContainer}
      >
        <View>
          <LinearGradient
            {...Colors.light.buttonGradient}
            style={styles.headerButtonRow}
          >
            <TouchableOpacity
              style={{ alignSelf: "flex-end" }}
              onPress={() => handleRedirectRegister()}
            >
              <Text
                style={{
                  alignSelf: "flex-end",
                  color: Colors.light.textPrimary,
                }}
              >
                Register Here
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLogout()}>
              <Text
                style={{
                  color: "#f33918",
                  fontWeight: "bold",
                  fontFamily: Fonts.sans,
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.header}>
          <View style={styles.profileContainer}></View>
          <View>
            <Text style={styles.headerText}>
              {appUser?.username || "Guest User"}
            </Text>
          </View>
          <Text style={styles.pillUnit}>N DAY STREAK</Text>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.styleView}
        contentContainerStyle={styles.bodyContainer}
      >
        <ScrollView>
          <ImageBackground
            source={require("../images/snflower.jpg")}
            resizeMode="cover"
            style={styles.achievementCardContainer}
          >
            <Text style={{ alignSelf: "center", marginBottom: Spacing.two }}>
              Achievements
            </Text>

            <View style={styles.achievementCardRow}>
              <BlurView intensity={20} style={styles.achievementCard}>
                <View style={{ alignSelf: "center" }}>
                  <Text
                    style={{ backgroundColor: "gray", padding: Spacing.five }}
                  >
                    Icon
                  </Text>
                </View>
                <Text style={{ alignSelf: "center" }}>First Lesson</Text>
              </BlurView>
              <BlurView intensity={20} style={styles.achievementCard}>
                <View style={{ alignSelf: "center" }}>
                  <Text
                    style={{ backgroundColor: "gray", padding: Spacing.five }}
                  >
                    Icon
                  </Text>
                </View>
                <Text style={{ alignSelf: "center" }}>Statistical Newbie</Text>
              </BlurView>
            </View>
            <View style={styles.achievementCardRow}>
              <BlurView intensity={20} style={styles.achievementCard}>
                <View style={{ alignSelf: "center" }}>
                  <Text
                    style={{ backgroundColor: "gray", padding: Spacing.five }}
                  >
                    Icon
                  </Text>
                </View>

                <Text style={{ alignSelf: "center" }}>Statistician</Text>
              </BlurView>
              <BlurView intensity={20} style={styles.achievementCard}>
                <View style={{ alignSelf: "center" }}>
                  <Text
                    style={{ backgroundColor: "gray", padding: Spacing.five }}
                  >
                    Icon
                  </Text>
                </View>
                <Text style={{ alignSelf: "center" }}>Data Analyst</Text>
              </BlurView>
            </View>
          </ImageBackground>
        </ScrollView>
        <View style={{ width: "75%" }}>
          <Text style={{ alignSelf: "center", marginBottom: Spacing.three }}>
            Your Learning Stats
          </Text>
          <View style={{ gap: Spacing.two, width: "75%", alignSelf: "center" }}>
            <View style={styles.statCard}>
              <Text style={styles.statBadge}>1</Text>
              <Text style={styles.statText}>Days Active</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statBadge}>2</Text>
              <Text style={styles.statText}>Questions Answered</Text>
            </View>
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
    paddingTop: Spacing.two,
    paddingBottom: Spacing.four,
    paddingHorizontal: Spacing.three,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    backgroundColor: Colors.light.headerBackgroundColor,
  },
  headerButtonRow: {
    width: "100%",
    gap: Spacing.two,
    backgroundColor: Colors.light.headerBackgroundColor,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: Spacing.two,
  },
  headerText: {
    fontSize: 24,
    color: Colors.light.textHeader,
    fontFamily: Fonts.nunitoBlack,
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
    fontSize: 16,
    fontFamily: Fonts.nunitoBlack,
    alignSelf: "center",
  },
  achievementCardRow: {
    marginVertical: Spacing.two,
    flexDirection: "row",
    alignSelf: "center",
    width: "75%",
    gap: Spacing.two,
  },
  achievementCardContainer: {
    width: "100%",
    alignSelf: "center",
    paddingVertical: Spacing.four,
    borderRadius: 16,
    // backgroundColor: Colors.light.startStatusBackground,
    backgroundImage: "../images/snflower.jpg",
  },
  achievementCard: {
    padding: Spacing.four,
    borderColor: Colors.light.borderColor,
    borderWidth: 1,
    borderRadius: 16,
    gap: Spacing.two,
    width: "50%",
    overflow: "hidden", // Required to keep the blur clipped within borderRadius
    backgroundColor: "rgba(255, 255, 255, 0.4)",
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
