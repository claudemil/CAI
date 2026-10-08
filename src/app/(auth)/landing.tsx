import { Colors, Fonts, Spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const landing = () => {
  const router = useRouter();

  const handleRedirectRegister = () => {
    router.navigate("/(auth)/register");
  };
  const handleRedirectLogin = () => {
    router.navigate("/(auth)/login");
  };

  return (
    <View style={{ backgroundColor: Colors.light.background, height: "100%" }}>
      <View
        style={{
          width: "80%",
          alignSelf: "center",
          justifyContent: "center",
          height: "50%",
        }}
      >
        <Text
          style={{
            padding: Spacing.seven,
            backgroundColor: "#c8c8c8c8",
            width: "50%",
            alignSelf: "center",
            marginBottom: Spacing.seven,
          }}
        >
          Logo
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontFamily: Fonts.nunitoBlack,
            fontSize: 64,
            color: Colors.light.startStatusBackground,
            marginTop: Spacing.two,
          }}
        >
          Stastasiones
        </Text>
      </View>
      <View style={{ height: "50%", gap: Spacing.three }}>
        <TouchableOpacity
          style={{
            width: "75%",
            alignSelf: "center",
            backgroundColor: Colors.light.startStatusBackground,
            borderRadius: 12,
          }}
          onPress={() => handleRedirectLogin()}
        >
          <Text
            style={{
              alignSelf: "center",
              padding: Spacing.four,
              fontFamily: Fonts.nunitoBlack,
              fontSize: 16,
              color: Colors.light.background,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "75%",
            alignSelf: "center",
            backgroundColor: Colors.light.background,
            borderRadius: 12,
            borderColor: Colors.light.startStatusBackground,
            borderWidth: 2,
          }}
          onPress={() => handleRedirectRegister()}
        >
          <Text
            style={{
              alignSelf: "center",
              padding: Spacing.four,
              fontFamily: Fonts.nunitoBlack,
              fontSize: 16,
              color: Colors.light.startStatusBackground,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default landing;
