import { StyleSheet, Text, View } from "react-native";

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
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
        <Text style={styles.statusText}>{status}</Text>
      </View>
      <View style={styles.lastView}>
        <Text>Button Soon</Text>
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
    gap: 8,
  },
  firstView: {
    flex: 1,
    backgroundColor: "black",
  },
  middleView: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  lastView: {
    flex: 1,
  },
  statusText: {
    width: 104,
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 8,
    borderRadius: 200,
    backgroundColor: "blue",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
