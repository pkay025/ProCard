import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView, StyleSheet, Platform } from "react-native";
import ProCard from "./components/ProCard"; 


export default function App() {
  const NanaHemaaData = {
    name: "Nana Hemaa",
    image: require("./assets/nana.jpeg"),
    type: "Caring",
    likes: 1000,
    ambition: ["To be a doctor"],
    hobbies: ["Reading books", "Watching cartoons"],
  };
    const PaakowData = {
      name: "Paakow",
      image: require("./assets/paakow.jpeg"),
      type: "Friendly",
      likes: 500,
      ambition: ["To be a programmer"],
      hobbies: ["Playing games,listening to music, watching football and coding"],
    };
  
    const OhenebaData = {
      name: "Oheneba",
      image: require("./assets/oheneba.jpeg"),
      type: "Optimistic",
      likes: 800,
      ambition: ["To be a doctor"],
      hobbies: ["Watching cartoons"],
    };
  
    const AuntData = {
      name: "Aunt",
      image: require("./assets/aunt.jpeg"),
      type: "Caring and Friendly",
      likes: 900,
      ambition: ["To be a Lecturer"],
      hobbies: ["Reading books", "Watching movies"],
    };
  
    const AyaData = {
      name: "Aya",
      image: require("./assets/Aya.png"),
      type: "Passionate",
      likes: 800,
      ambition: ["To be a Physician"],
      hobbies: ["Watching movies"],
    };
  
    const SedemData = {
      name: "Sedem",
      image: require("./assets/Sedem.png"),
      type: "Generous and Kind",
      likes: 900,
      ambition: ["To be a Software Engineer"],
      hobbies: ["Playing games, listening to music, watching football matches and Watching movies"],
    };
  
    const NancyData = {
      name: "Nancy",
      image: require("./assets/nancy.png"),
      type: "Friendly",
      likes: 600,
      ambition: ["To be a Geologist"],
      hobbies: ["Listening to music, watching movies"],
    };
   
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ProCard {...AyaData} />
          <ProCard {...NanaHemaaData} />  
          <ProCard {...AuntData} />
          <ProCard {...NancyData} />
          <ProCard {...SedemData} />
          <ProCard {...OhenebaData} />
          <ProCard {...PaakowData} />
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
      paddingTop: Platform.OS === "android" ? 25 : 0,
    },

  });



