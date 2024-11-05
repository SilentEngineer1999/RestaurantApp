import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ResultDetails } from "./ResultDetails";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
interface Result {
  name: string;
  stars: number;
  dishes: string[];
  image_url: string;
  title: string;
}

interface listProps {
  result: Result[];
}

type RootStackParamList = {
  index: undefined;
  search: undefined;
  ResultsShowScreen: { item: Result }; // Add ResultsShowScreen here
};

export const ResultsList: React.FC<listProps> = ({ result }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {result.length > 0 ? result[0].title : null}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultsShowScreen", { item })}
            >
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 10,
    marginBottom: 5,
  },
});
