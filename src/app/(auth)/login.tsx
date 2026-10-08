import { Colors, Fonts, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
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
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <View>
          <TouchableOpacity
            onPress={() => handleRedirectRegister()}
            style={styles.loginLink}
          >
            <Text>
              Don't have an account?{" "}
              <Text style={styles.loginLinkText}>Register here!</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={48} color={Colors.light.background} />
          </View>
          <Text style={styles.headerText}>Login Account</Text>
          <Text style={styles.subHeaderText}>Enter your credentials</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor={Colors.light.startStatusBackground}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor={Colors.light.startStatusBackground}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => handleLogin()}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Colors.light.background,
    height: "100%",
  },
  headerContainer: {
    width: "100%",
    height: "40%",
    alignContent: "center",
    justifyContent: "flex-end",
    gap: Spacing.three,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    paddingTop: Spacing.seven,
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
    backgroundColor: Colors.light.startStatusBackground,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  loginLink: {
    alignSelf: "flex-end",
  },
  loginLinkText: {
    color: Colors.light.startStatusBackground,
    fontFamily: Fonts.nunitoBlack,
  },
  bodyContainer: {
    gap: Spacing.two,
    width: "75%",
    height: "60%",
    alignSelf: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.light.background,
  },
  headerText: {
    fontSize: 48,
    fontFamily: Fonts.nunitoBlack,

    color: Colors.light.startStatusBackground,
  },
  subHeaderText: {
    fontSize: 24,
    fontFamily: Fonts.nunitoExtraBold,
    color: Colors.light.startStatusBackground,
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
    borderColor: Colors.light.startStatusBackground,
    borderWidth: 2,
    borderRadius: 12,
  },
  inputText: {
    fontFamily: Fonts.nunitoBold,
    fontSize: 16,
    color: Colors.light.startStatusBackground,
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
    backgroundColor: Colors.light.startStatusBackground,
    borderRadius: 16,
  },
  loginButtonText: {
    fontFamily: Fonts.nunitoBlack,
    fontSize: 24,
    color: Colors.light.textPrimary,
  },
});
export default login;
