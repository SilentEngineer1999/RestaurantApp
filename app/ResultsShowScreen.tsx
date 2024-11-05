import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Rating } from "react-native-ratings";

interface Result {
  name: string;
  stars: number;
  dishes: string[];
  image_url: string;
  title: string;
}

type RootStackParamList = {
  ResultsShowScreen: { item: Result };
};

type ResultsShowScreenRouteProp = RouteProp<
  RootStackParamList,
  "ResultsShowScreen"
>;

const ResultsShowScreen = () => {
  const route = useRoute<ResultsShowScreenRouteProp>();
  const { item } = route.params;

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Image source={{ uri: item.image_url }} style={styles.imageCSS} />
      <Text style={styles.titleCSS}>{item.name}</Text>
      <Rating type="star" ratingImage="star" ratingBackgroundColor="gray" />
      {item.dishes.map((i) => {
        return (
          <>
            <Text key={i}>{i}</Text>
          </>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  imageCSS: {
    width: "100%",
    height: 300,
  },
  titleCSS: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default ResultsShowScreen;
