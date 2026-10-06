import { Colors, Fonts, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../context/auth";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleRedirectRegister = () => {
    router.navigate("/(auth)/register");
  };

  const { login } = useAuth();

  const handleLogin = async () => {
    login(username, password);
  };
  return (
    <View>
      <LinearGradient
        {...Colors.light.buttonGradient}
        style={styles.headerContainer}
      >
        <View>
          <TouchableOpacity
            onPress={() => handleRedirectRegister()}
            style={styles.registerLink}
          >
            <Text>
              Don't have an account?{" "}
              <Text style={{ color: Colors.light.startStatusBackground }}>
                Register here!
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <View style={styles.avatarCircle}>
            <Ionicons
              name="person-add"
              size={46}
              color={Colors.light.buttonPrimary}
            />
          </View>
          <Text style={styles.headerText}>Login Account</Text>
          <Text style={styles.subHeaderText}>Enter your credentials</Text>
        </View>
      </LinearGradient>

      <View style={styles.bodyContainer}>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={Colors.light.textSecondary}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.light.textSecondary}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => handleLogin()}>
            <LinearGradient
              {...Colors.light.buttonGradient}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    gap: Spacing.three,
    backgroundColor: Colors.light.headerBackgroundColor,
    paddingHorizontal: Spacing.three,
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
  registerLink: {
    alignSelf: "flex-end",
  },
  bodyContainer: {
    marginTop: Spacing.six,
    padding: Spacing.six,
    gap: Spacing.two,
    width: "75%",
    alignSelf: "center",
    backgroundColor: Colors.light.backgroundSelected,
  },
  headerText: {
    fontSize: 48,
    fontWeight: "bold",
    fontFamily: Fonts.sans,
    color: Colors.light.headerTextColor,
  },
  subHeaderText: {
    fontSize: 24,
    fontWeight: "heavy",
    fontFamily: Fonts.sans,
    color: Colors.light.headerTextColor,
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
  inputRow: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: Colors.light.background,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.light.borderColor,
  },
  buttonRow: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  loginButton: {
    alignSelf: "center",
    paddingVertical: Spacing.four,
    paddingHorizontal: Spacing.six,
    marginVertical: Spacing.three,
    backgroundColor: Colors.light.buttonPrimary,
    borderRadius: 16,
  },
  loginButtonText: {
    color: Colors.light.textPrimary,
  },
});
export default login;
