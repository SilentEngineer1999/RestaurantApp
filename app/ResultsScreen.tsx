import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ResultsList } from "./ResultsList";

interface Result {
  name: string;
  stars: number;
  dishes: string[];
  image_url: string;
  title: string;
}

interface resultsProps {
  results: Result[];
}

export const ResultsScreen: React.FC<resultsProps> = ({ results }) => {
  const filterResultsByStars = (stars1: number, stars2: number) => {
    return results.filter((result) => {
      if (result.stars <= stars1 && result.stars > stars2) {
        if (stars1 <= 4) {
          result.title = "Poor Rated";
        } else if (stars1 <= 4.5) {
          result.title = "Avg Rated";
        } else {
          result.title = "Best Rated";
        }
        return result;
      }
    });
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <ResultsList result={filterResultsByStars(4, 0)} />
        <ResultsList result={filterResultsByStars(4.5, 4)} />
        <ResultsList result={filterResultsByStars(5, 4.5)} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, // Ensures the content inside ScrollView can expand
    paddingBottom: 20, // Add padding for better scroll behavior
  },
});
