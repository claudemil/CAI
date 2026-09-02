import { Colors, Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Size = "small" | "medium" | "large";
type State = "primary" | "secondary";
type Page = "index" | "profile" | "visualize";
type buttonProps = {
  label: string;
  size: Size;
  state: State;
  page?: Page;
};

export const Button = ({ label, state, size, page }: buttonProps) => {
  return (
    <TouchableOpacity
      style={[
        size == "medium" ? styles.mediumButton : styles.largeButton,
        state == "primary" ? styles.primaryButton : styles.secondaryButton,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {state == "primary" && page == "index" && (
          <Ionicons
            name="book-outline"
            size={16}
            color={Colors.light.textPrimary}
          ></Ionicons>
        )}

        {state == "secondary" && page == "index" && (
          <Ionicons
            name="stats-chart-outline"
            size={12}
            color={Colors.light.textPrimary}
          ></Ionicons>
        )}

        <Text
          style={state == "primary" ? styles.primaryText : styles.secondaryText}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.light.buttonPrimary,
  },
  secondaryButton: {
    backgroundColor: Colors.light.buttonSecondary,
  },
  mediumButton: {
    width: "50%",
    borderRadius: 12,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  largeButton: {
    width: 168,
    borderRadius: 12,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  primaryText: {
    color: Colors.light.textPrimary,
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    textAlign: "center",
  },
  secondaryText: {
    color: Colors.light.textSecondary,
    fontFamily: Fonts.sans,
    fontWeight: "bold",
  },
});
