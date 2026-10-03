import { Colors, Spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth, db } from "../../../firebaseConfig";

const register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const router = useRouter();

  const handleRedirectLogin = () => {
    router.navigate("/(auth)/login");
  };

  const handleRegister = async () => {
    if (!username || !password || !confirmPassword || !email) {
      Alert.alert("Error", "Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      setIsVerifying(true);
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCred.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: username,
        email: email,
        createdAt: new Date().toISOString(),
      });
      console.log(user);
    } catch (e: any) {
      let errorMessage = "Registration failed!";

      if (e.code === "auth/email-already-in-use") {
        errorMessage = "That email address is already in use!";
      } else if (e.code === "auth/invalid-email") {
        errorMessage = "That email address is invalid!";
      } else if (e.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters.";
      } else if (e.message) {
        errorMessage = e.message;
      }

      Alert.alert("Error", errorMessage);
    } finally {
      setIsVerifying(false);
      Alert.alert("Success", "Account created successfully!");
      router.replace({
        pathname: "/",
      });
    }
  };
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => handleRedirectLogin()}
          style={{ backgroundColor: Colors.light.buttonPrimary }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <View style={styles.avatarCircle}>
            <Ionicons
              name="person-add"
              size={46}
              color={Colors.light.buttonPrimary}
            />
          </View>
          <Text style={styles.userName}>Create Account</Text>
          <Text style={styles.userEmail}>
            Enter your credentials to get started
          </Text>
        </View>

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
            style={{ backgroundColor: Colors.light.background }}
            placeholder="Email"
            placeholderTextColor={Colors.light.textSecondary}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          ></TextInput>
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={{ backgroundColor: Colors.light.background }}
            placeholder="Password"
            placeholderTextColor={Colors.light.textSecondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            style={{ backgroundColor: Colors.light.background }}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.light.textSecondary}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <TouchableOpacity onPress={() => handleRegister()}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: Colors.light.background,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.light.borderColor,
  },
});
export default register;
