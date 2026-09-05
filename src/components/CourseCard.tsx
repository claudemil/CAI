import { Colors, Fonts, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Status = "Completed" | "Start" | "Locked";
type courseCardProps = {
  title: string;
  subTitle: string;
  status: Status;
};

export const CourseCard = ({ title, subTitle, status }: courseCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Text>ICON</Text>
      </View>
      <View style={styles.middleView}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <Text
          style={
            status == "Completed"
              ? styles.completedStatusText
              : status == "Start"
                ? styles.startStatusText
                : status == "Locked"
                  ? styles.lockedStatusText
                  : styles.statusText
          }
        >
          {status}
        </Text>
      </View>
      <View style={styles.lastView}>
        <TouchableOpacity
          onPress={() => {
            console.log("not yet!");
          }}
        >
          <Ionicons name="chevron-forward" size={24} color="#4b93ff"></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    padding: 16,
    marginLeft: 16,
    gap: Spacing.two,
  },
  firstView: {
    flex: 1,
    backgroundColor: "black",
  },
  middleView: {
    flex: 3,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: Spacing.two,
    gap: Spacing.one,
  },
  lastView: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  title: {
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    fontSize: 10,
    color: Colors.light.textSecondary,
  },
  subTitle: {
    fontFamily: Fonts.sans,
    fontWeight: "regular",
    fontSize: 8,
    color: Colors.light.statusText,
  },
  statusText: {
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    fontSize: 8,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 200,
    backgroundColor: "blue",
    textAlign: "center",
    textAlignVertical: "center",
  },
  completedStatusText: {
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    fontSize: 8,
    color: Colors.light.completedStatusText,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 200,
    backgroundColor: Colors.light.completeBackground,
    textAlign: "center",
    textAlignVertical: "center",
  },
  startStatusText: {
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    fontSize: 8,
    color: Colors.light.startStatusText,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 200,
    backgroundColor: Colors.light.startStatusBackground,
    textAlign: "center",
    textAlignVertical: "center",
  },
  lockedStatusText: {
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    fontSize: 8,
    color: Colors.light.textSecondary,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 200,
    backgroundColor: Colors.light.lockedStatusBackground,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
