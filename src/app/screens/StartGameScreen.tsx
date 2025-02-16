import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { selectGamemode, selectPlayer } from "../../store/gameSlice";
import Icon from "react-native-vector-icons/Feather";
import Layout from "../../components/Layout";
import Svg, { Text as TextSvg } from "react-native-svg";

const StartGameScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentGamemode = useSelector(selectGamemode);
  const currentPlayer = useSelector(selectPlayer);

  const handleChoice = (type: "truth" | "dare") => {
    navigation.navigate("GameCardScreen", { type });
  };

  return (
    <Layout>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          style={styles.backButton}
          name="chevron-left"
          size={24}
          color="#DDD8B8"
        />
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.playerName}>
          <Svg height="40" width="200">
            <TextSvg
              {...styles.gamemodeCardName}
              x="0"
              y="30"
              fontSize="40"
              stroke="#DDD8B8"
              strokeWidth="2"
              fill="none"
            >
              {item.name}
            </TextSvg>
            <TextSvg
              {...styles.gamemodeCardName}
              x="0"
              y="30"
              fontSize="40"
              fill="#696495"
            >
              {item.name}
            </TextSvg>
          </Svg>
        </Text>
        <Text style={styles.subtitle}>твой ход</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => handleChoice("truth")}
          >
            <Text style={styles.choiceText}>ПРАВДА</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => handleChoice("dare")}
          >
            <Text style={styles.choiceText}>ДЕЙСТВИЕ</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.randomButton}
          onPress={() => handleChoice(Math.random() < 0.5 ? "truth" : "dare")}
        >
          <Text style={styles.randomButtonText}>Случайный выбор</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    left: 5,
    top: 50,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  card: {
    marginTop: 150,
    backgroundColor: "#532D7F",
    padding: 20,
    margin: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
    borderColor: "#DDD8B8",
    borderWidth: 2,
  },
  playerName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DDD8B8",
  },
  subtitle: {
    fontSize: 18,
    color: "#DDD8B8",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 15,
  },
  choiceButton: {
    backgroundColor: "#7B5BA6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  choiceText: {
    fontSize: 18,
    color: "#DDD8B8",
  },
  randomButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#DDD8B8",
  },
  randomButtonText: {
    color: "#DDD8B8",
    fontSize: 16,
  },
});
