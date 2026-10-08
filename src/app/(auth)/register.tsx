import { Colors, Fonts, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../context/auth";

const register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const router = useRouter();
  const { register, user } = useAuth();
  const handleRedirectLogin = () => {
    router.navigate("/(auth)/login");
  };

  const handleRegister = async () => {
    try {
      await register(username, password, confirmPassword, email);
    } finally {
      Alert.alert("Success", "Registered account successfully!");
    }
  };
  return (
    <View style={{ backgroundColor: Colors.light.background }}>
      <View style={styles.headerContainer}>
        <View style={{ alignSelf: "flex-end" }}>
          <TouchableOpacity style={{}} onPress={() => handleRedirectLogin()}>
            <Text>
              Already have an account?{"  "}
              <Text style={{ color: Colors.light.startStatusBackground }}>
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.avatarCircle}>
            <Ionicons
              name="person-add"
              size={48}
              color={Colors.light.background}
            />
          </View>
          <Text style={styles.headerText}>Create Account</Text>
          <Text style={styles.subHeaderText}>
            Enter your credentials to get started
          </Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.inputRow}>
          <TextInput
            style={{
              fontFamily: Fonts.nunitoBold,
              fontSize: 16,
              color: Colors.light.startStatusBackground,
            }}
            placeholder="Username"
            placeholderTextColor={Colors.light.startStatusBackground}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            style={{
              fontFamily: Fonts.nunitoBold,
              fontSize: 16,
              color: Colors.light.startStatusBackground,
            }}
            placeholder="Email"
            placeholderTextColor={Colors.light.startStatusBackground}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          ></TextInput>
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={{
              fontFamily: Fonts.nunitoBold,
              fontSize: 16,
              color: Colors.light.startStatusBackground,
            }}
            placeholder="Password"
            placeholderTextColor={Colors.light.startStatusBackground}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            style={{
              fontFamily: Fonts.nunitoBold,
              fontSize: 16,
              color: Colors.light.startStatusBackground,
            }}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.light.startStatusBackground}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => handleRegister()}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    gap: 0,
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
    fontFamily: Fonts.nunitoBlack,
    color: Colors.light.startStatusBackground,
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
  buttonRow: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  registerButton: {
    alignSelf: "center",
    paddingVertical: Spacing.four,
    paddingHorizontal: Spacing.six,
    marginVertical: Spacing.three,
    backgroundColor: Colors.light.startStatusBackground,
    borderRadius: 16,
  },
  registerButtonText: {
    fontFamily: Fonts.nunitoBlack,
    fontSize: 24,
    color: Colors.light.textPrimary,
  },
});
export default register;
