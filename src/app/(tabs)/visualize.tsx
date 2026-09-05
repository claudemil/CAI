import { Button } from "@/components/Button";
import Card from "@/components/Card";
import { Colors, Fonts, Spacing } from "@/constants/theme";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DataPoint = ({ id }: { id: number }) => (
  <View
    style={{
      width: 80,
      height: 80,
      backgroundColor: "#e0e0e0",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
      borderRadius: 8,
    }}
  >
    <Text>Item {id}</Text>
  </View>
);

export default function Index() {
  const [items, setItems] = useState<number[]>([]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, prevItems.length + 1]);
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerGreetingsContainer}>
            <Text
              style={[
                styles.headerText,
                { color: Colors.light.textHeader, fontFamily: Fonts.sans },
              ]}
            >
              Stastationes
            </Text>
            <Text
              style={[
                styles.headerText,
                { color: Colors.light.textHeader, fontFamily: Fonts.sans },
              ]}
            >
              Hello, User!
            </Text>
          </View>
          <View>
            <Text style={[styles.pillPrimary, {}]}>N DAY STREAK</Text>
          </View>
        </View>
        <View style={styles.headerButtons}>
          <Button
            label="Measure of Tendencies"
            size="medium"
            state="primary"
          ></Button>
          <Button
            label="Correlation & Covariance"
            size="medium"
            state="primary"
          ></Button>
        </View>
      </View>
      <ScrollView
        style={styles.styleView}
        contentContainerStyle={styles.bodyContainer}
      >
        <View>
          <Card label="hey"></Card>
        </View>
        <View style={styles.cardRow}>
          <Card label="hey"></Card>
          <Card label="hey"></Card>
          <Card label="hey"></Card>
        </View>
        <View
          style={{
            borderColor: Colors.light.borderColor,
            borderWidth: 1,
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <TextInput></TextInput>
          <TouchableOpacity style={{ flexDirection: "row" }} onPress={addItem}>
            <Text>Add Item</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.datasetHeaderRow}>
            <Text
              style={{
                color: "#AAAAAA",
                fontSize: 12,
                fontWeight: "bold",
                fontFamily: Fonts.sans,
                alignSelf: "center",
              }}
            >
              Dataset ({items.length} values)
            </Text>
            <TouchableOpacity onPress={clearItems} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            style={{ flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
          >
            {items.map((id) => (
              <DataPoint key={id} id={id} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  headerContainer: {
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    backgroundColor: "#C8C8C8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 32,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerGreetingsContainer: {
    justifyContent: "space-between",
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: Spacing.two,
    gap: Spacing.two,
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.three,
    marginTop: Spacing.two,
    paddingVertical: Spacing.five,
  },

  styleView: {
    flex: 1,
  },
  pillPrimary: {
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 8,
    borderRadius: 200,
    alignSelf: "flex-start",
    backgroundColor: Colors.light.buttonPrimary,
    color: Colors.light.textPrimary,
    fontFamily: Fonts.sans,
    fontWeight: "bold",
  },
  cardRow: {
    flex: 1,
    flexDirection: "row",
    gap: Spacing.two,
  },
  datasetHeaderRow: {
    flexDirection: "row",
    gap: Spacing.six,
    justifyContent: "center",
    alignContent: "center",
  },
  clearButton: {
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 8,
    backgroundColor: Colors.light.cancelButtonBackground,
    borderRadius: 200,
    alignSelf: "center",
  },
  clearButtonText: {
    fontFamily: Fonts.sans,
    fontSize: 12,
    color: Colors.light.cancelButtonText,
    alignSelf: "center",
  },
});
