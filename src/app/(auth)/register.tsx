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
    <View>
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
              size={46}
              color={Colors.light.buttonPrimary}
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
            style={{ backgroundColor: Colors.light.background }}
            placeholder="Username"
            placeholderTextColor={Colors.light.textSecondary}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.light.textSecondary}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          ></TextInput>
        </View>

        <View style={styles.inputRow}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.light.textSecondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={Colors.light.textSecondary}
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
            <Text>Register</Text>
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
    gap: 0,
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
  registerButton: {
    alignSelf: "center",
    paddingVertical: Spacing.four,
    paddingHorizontal: Spacing.six,
    marginVertical: Spacing.three,
    backgroundColor: Colors.light.buttonPrimary,
    borderRadius: 16,
  },
});
export default register;
