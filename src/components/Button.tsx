import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Size = "small" | "medium" | "large";
type State = "primary" | "secondary";
type buttonProps = {
  label: string;
  size: Size;
  state: State;
};

export const Button = ({ label, state, size }: buttonProps) => {
  return (
    <TouchableOpacity
      style={[
        size == "medium" ? styles.mediumButton : styles.largeButton,
        state == "primary" ? styles.primaryButton : styles.secondaryButton,
      ]}
    >
      <Text
        style={state == "primary" ? styles.primaryText : styles.secondaryText}
      >
        {label}
      </Text>
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
    width: 122,
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
  },
  secondaryText: {
    color: Colors.light.textSecondary,
    fontFamily: Fonts.sans,
    fontWeight: "bold",
  },
});
