import { StyleSheet, Text, TouchableOpacity } from "react-native";

type PillProps = {
  label: string;
};

export const Pill = ({ label }: PillProps) => {
  return (
    <TouchableOpacity style={styles.pill}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pill: {
    width: 104,
    height: 24,
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 8,
    borderRadius: 200,
    backgroundColor: "#000000",
    alignSelf: "flex-start",
  },
});
