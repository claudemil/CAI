import { Colors, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleRedirectRegister = () => {
    router.navigate("/(auth)/register");
  };
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => handleRedirectRegister()}
          style={{ backgroundColor: Colors.light.buttonPrimary }}
        >
          <Text>Register</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <View style={styles.avatarCircle}>
            <Ionicons
              name="person-add"
              size={46}
              color={Colors.light.buttonPrimary}
            />
          </View>
          <Text style={styles.userName}>Login Account</Text>
          <Text style={styles.userEmail}>Enter your credentials</Text>
        </View>

        <TextInput
          style={{ backgroundColor: Colors.light.background }}
        ></TextInput>
      </View>
      <ScrollView></ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    backgroundColor: Colors.light.headerBackgroundColor,
    paddingHorizontal: Spacing.seven,
    paddingVertical: Spacing.three,
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: Spacing.two,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  userEmail: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    marginTop: 4,
  },
});
export default login;
