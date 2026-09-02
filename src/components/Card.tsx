import { Colors, Spacing } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

type cardProps = {
  label: string;
};
function Card({ label }: cardProps) {
  return (
    <View style={styles.cardBody}>
      <Text>{label}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  cardBody: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.borderColor,
    borderRadius: 16,
    padding: Spacing.four,
    overflow: "hidden",
    flex: 1,
  },
  cardText: {
    padding: Spacing.three,
    overflow: "hidden",
  },
});
