import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

interface Result{
    name: string,
    stars: number,
    dishes: string[],
    image_url: string,
    title : string
}

interface ResultDetailsProp {
    result : Result
}


export const ResultDetails : React.FC<ResultDetailsProp>= ({result}) => {
    console.log(result.image_url);
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}} />
            <Text>{result.name}</Text>
            <Text>{result.stars} Stars, {Math.floor(Math.random() * 100)} Reviews</Text>
        </View>
    )
}

const  styles = StyleSheet.create({
    container:{
        marginLeft: 10

    },
    image:{
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
        marginRight:10
    },
    name:{
        fontWeight: "bold",
    }

})