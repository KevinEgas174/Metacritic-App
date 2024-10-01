import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { getLatestGames } from "./lib/metacritic";

export default function App() {
  const [games, setGames] = useState([]);
    useEffect(() => {
      getLatestGames().then((games) => {
        setGames(games);
    });
    }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
      {games.map((game) => (
        <View key={game.slug} style={ styles.card}>
          <Image source={{ uri: game.image }} style={styles.image}/>
          <Text style={styles.score}>{game.score}</Text>
          <Text style={styles.tittle}>{game.title}</Text>
          <Text style={styles.description}>{game.description}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  tittle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
});