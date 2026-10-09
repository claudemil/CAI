import { Colors, Fonts, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Status = "Completed" | "In Progress" | "Locked";
type courseCardProps = {
  title: string;
  subTitle: string;
  status: Status;
  id?: string;
  onComplete?: () => void;
};

export const CourseCard = ({
  title,
  subTitle,
  status,
  id,
  onComplete,
}: courseCardProps) => {
  const router = useRouter();

  const handleShowLessonOutline = (id: string) => {
    router.push({
      pathname: "/lesson/outline/[Id]",
      params: { Id: id },
    });
  };
  return (
    <BlurView
      intensity={20}
      style={
        status == "Completed"
          ? styles.completedContainer
          : status == "In Progress"
            ? styles.inProgressContainer
            : styles.container
      }
    >
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
              : status == "In Progress"
                ? styles.InProgressStatusText
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
            handleShowLessonOutline(id!);
          }}
          // onPress={onComplete}
          disabled={status === "Locked" ? true : false}
        >
          <Ionicons
            name="chevron-forward"
            size={24}
            color={status === "Locked" ? Colors.light.borderColor : "#4b93ff"}
          ></Ionicons>
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "75%",
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    padding: 16,
    marginLeft: 16,
    gap: Spacing.two,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  inProgressContainer: {
    width: "75%",
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.light.activeTabBarBackground,
    padding: 16,
    marginLeft: 16,
    gap: Spacing.two,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  completedContainer: {
    width: "75%",
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.light.completedBorder,
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
    fontFamily: Fonts.nunitoExtraBold,
    fontSize: 16,
    color: Colors.light.buttonPrimary,
  },
  subTitle: {
    fontFamily: Fonts.nunitoBold,
    fontSize: 12,
    color: Colors.light.startStatusText,
  },
  statusText: {
    fontFamily: Fonts.nunitoBold,
    fontSize: 8,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 200,
    backgroundColor: "blue",
    textAlign: "center",
    textAlignVertical: "center",
  },
  completedStatusText: {
    fontFamily: Fonts.nunitoBold,
    fontSize: 8,
    color: Colors.light.completedStatusText,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 200,
    backgroundColor: Colors.light.completedBackground,
    textAlign: "center",
    textAlignVertical: "center",
  },
  InProgressStatusText: {
    fontFamily: Fonts.nunitoBold,
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
