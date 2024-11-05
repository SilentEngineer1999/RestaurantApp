// app/details.tsx
import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import {Feather} from "@expo/vector-icons"

interface SearchBarProps {
    term: string;
    onTermChange: (newTerm: string) => void;
    onTermSubmit: () => void;
  }

export const SearchBar : React.FC<SearchBarProps> = ( {term, onTermChange, onTermSubmit} )  => {
  return (
      <View style={styles.background}>
      <Feather name="search" size={30} style={styles.searchIcon}/>
      <TextInput placeholder="Search"  value={term} onChangeText={onTermChange} onEndEditing={onTermSubmit} style={styles.searchBox}/>
      </View>
  );
}

export const styles = StyleSheet.create({
  background:{
    backgroundColor:"#F0EEEE",
    height:50,
    borderRadius:5,
    marginHorizontal: 15,
    display:"flex",
    flexDirection:"row",
    alignItems: "center",   
    marginTop: 10,
    marginBottom: 20
  },
  searchBox: {
    marginLeft:10, 
    flex:1
  },
  searchIcon: {
    marginLeft:10
  }
})