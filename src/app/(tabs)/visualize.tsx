import { Button } from "@/components/Button";
import Card from "@/components/Card";
import { Colors, Fonts, Spacing } from "@/constants/theme";
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
import { SafeAreaView } from "react-native-safe-area-context";
type DataPointProps = {
  item: DataItem;
  removeItem: (id: number) => void;
};

interface DataItem {
  id: number;
  text: string;
}

const DataPoint = ({ item, removeItem }: DataPointProps) => (
  <View style={styles.dataPill}>
    <Text style={styles.dataPillText}>Item {item.text}</Text>
    <TouchableOpacity onPress={() => removeItem(item.id)}>
      <Text style={{ alignSelf: "center" }}>X</Text>
    </TouchableOpacity>
  </View>
);

export default function Index() {
  const [items, setItems] = useState<DataItem[]>([]);
  const [numberInput, setNumberInput] = useState<string>("");
  const [topic, setTopic] = useState<string>("Measure of Tendencies");

  const addItem = (inputText: string) => {
    if (!inputText.trim()) {
      Alert.alert("Empty inputs aren't allowed!");
      return;
    }

    const newItem: DataItem = {
      id: Math.random(),
      text: numberInput,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const clearItems = () => {
    setItems([]);
  };

  const removeItem = (itemToRemove: number) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerGreetingsContainer}>
            <Text style={styles.headerText}>Stastationes</Text>
            <Text style={styles.headerText}>Hello, User!</Text>
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
            page="visualize"
            onPress={() => setTopic("Measure of Tendencies")}
            status={topic == "Measure of Tendencies" ? "active" : "inactive"}
          ></Button>
          <Button
            label="Correlation & Covariance"
            size="medium"
            state="primary"
            page="visualize"
            onPress={() => setTopic("Correlation & Covariance")}
            status={topic == "Correlation & Covariance" ? "active" : "inactive"}
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
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Input a number e.g. 43"
            placeholderTextColor={Colors.light.textHeader}
            value={numberInput}
            onChangeText={(newText) => setNumberInput(newText)}
          ></TextInput>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => addItem(numberInput)}
          >
            <Text style={styles.textCenter}>Add Item</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.datasetHeaderRow}>
            <Text style={styles.datasetInfoHeader}>
              Dataset ({items.length} values)
            </Text>
            <TouchableOpacity onPress={clearItems} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.datapointContainer}>
            {items.map((dataItem) => (
              <DataPoint
                key={dataItem.id}
                item={dataItem}
                removeItem={removeItem}
              />
            ))}
          </View>
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
    color: Colors.light.textHeader,
    fontFamily: Fonts.sans,
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
  inputRow: {
    borderColor: Colors.light.borderColor,
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  dataPillText: {
    color: Colors.light.statusText,
    fontSize: 12,
    fontFamily: Fonts.sans,
    fontWeight: "bold",
    alignSelf: "center",
  },
  dataPill: {
    padding: Spacing.two,
    borderRadius: 999,
    backgroundColor: Colors.light.statusColor,
    flexDirection: "row",
    gap: Spacing.two,
    marginHorizontal: Spacing.half,
    marginVertical: Spacing.half,
  },
  textCenter: {
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  datasetInfoHeader: {
    color: "#AAAAAA",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: Fonts.sans,
    alignSelf: "center",
  },
  datapointContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
