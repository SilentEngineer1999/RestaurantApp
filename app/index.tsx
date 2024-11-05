// app/details.tsx
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { SearchBar } from "./SearchBar";
import useSearch from "./hooks/useSearch";
import { ResultsScreen } from "./ResultsScreen";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  index: undefined;
  search: undefined;
  ResultsShowScreen: undefined; // Add ResultsShowScreen here
};

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const { results, err, searchApi } = useSearch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={search}
        onTermChange={setSearch}
        onTermSubmit={searchApi}
      />

      {err ? <Text>{err}</Text> : null}
      <ResultsScreen results={results} />
    </View>
  );
}
