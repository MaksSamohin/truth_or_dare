import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { selectGamemode, selectPlayer } from "../../store/gameSlice";
import Icon from "react-native-vector-icons/Feather";
import Layout from "../../components/Layout";
import Svg, { Text as TextSvg } from "react-native-svg";
import { Pressable } from "react-native";
import { selectLanguage, t } from "../../store/localizationSlice";
import { localizedFontSize } from "../utils/helpers";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../utils/types";
import { Vibration } from "react-native";

type StartGameScreenRouteProp = RouteProp<RootStackParamList, "StartGame">;

const StartGameScreen = ({ navigation }) => {
  const currentPlayer = useSelector(selectPlayer);
  const language = useSelector(selectLanguage);
  const route = useRoute<StartGameScreenRouteProp>();

  const handleChoice = (type: "truth" | "dare") => {
    Vibration.vibrate(100);
    navigation.navigate("GameCard", { type, fromScreen: "StartGame" });
  };

  return (
    <Layout>
      <Pressable
        onPress={() =>
          navigation.navigate("GameModes", { fromScreen: "StartGame" })
        }
        hitSlop={150}
      >
        <Icon
          style={styles.backButton}
          name="chevron-left"
          size={24}
          color="#DDD8B8"
        />
      </Pressable>
      <View style={styles.card}>
        <View style={styles.playerName}>
          <Svg height="40" width="200">
            <TextSvg
              {...styles.playerCardName}
              x="50%"
              y="30"
              fontSize="36"
              stroke="#DDD8B8"
              strokeWidth="2"
              fill="none"
              textAnchor="middle"
            >
              {currentPlayer}
            </TextSvg>
            <TextSvg
              {...styles.playerCardName}
              x="50%"
              y="30"
              fontSize="36"
              fill="#542E71"
              textAnchor="middle"
            >
              {currentPlayer}
            </TextSvg>
          </Svg>
        </View>
        <Text style={[styles.subtitle]}>{t("yourTurn", language)}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => handleChoice("truth")}
          >
            <Svg height="22" width="100">
              <TextSvg
                {...styles.buttonChoiceText}
                x="50%"
                y="18"
                fontSize="18"
                stroke="#DDD8B8"
                strokeWidth="2"
                fill="none"
                textAnchor="middle"
              >
                {t("truth", language)}
              </TextSvg>
              <TextSvg
                {...styles.buttonChoiceText}
                x="50%"
                y="18"
                fontSize="18"
                fill="#72528A"
                textAnchor="middle"
              >
                {t("truth", language)}
              </TextSvg>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => handleChoice("dare")}
          >
            <Svg height="22" width="100">
              <TextSvg
                {...styles.buttonChoiceText}
                x="50%"
                y="18"
                fontSize="18"
                stroke="#DDD8B8"
                strokeWidth="2"
                fill="none"
                textAnchor="middle"
              >
                {t("dare", language)}
              </TextSvg>
              <TextSvg
                {...styles.buttonChoiceText}
                x="50%"
                y="18"
                fontSize="18"
                fill="#72528A"
                textAnchor="middle"
              >
                {t("dare", language)}
              </TextSvg>
            </Svg>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.randomButton}
          onPress={() => handleChoice(Math.random() < 0.5 ? "truth" : "dare")}
        >
          <Text style={[styles.randomButtonText]}>
            {t("randomChoice", language)}
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    left: -5,
    top: 15,
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
  },
  card: {
    marginTop: "35%",
    backgroundColor: "#542E71",
    padding: 20,
    margin: 20,
    borderRadius: 25,
    alignItems: "center",
    elevation: 5,
    borderColor: "#DDD8B8",
    borderWidth: 2,
  },
  playerName: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "#DDD8B8",
    marginBottom: 59,
    fontFamily: "Nunito-Regular",
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 65,
    gap: 10,
  },
  choiceButton: {
    backgroundColor: "#72528A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    boxShadow: "0 2 15 -1 rgba(27, 27, 27, 0.34)",
  },
  choiceText: {
    fontSize: 18,
    color: "#DDD8B8",
  },
  randomButton: {
    position: "absolute",
    backgroundColor: "#542E71",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#DDD8B8",
    borderRadius: 50,
    bottom: -25,
    height: 50,
    maxWidth: 222,
    width: "100%",
    boxShadow: "0 8 15 -8 rgba(27, 27, 27, 0.64)",
  },
  randomButtonText: {
    color: "#DDD8B8",
    fontFamily: "Nunito-Regular",
    fontSize: 18,
  },
  playerCardName: {
    fontFamily: "Nunito-Regular",
  },
  buttonChoiceText: {
    fontFamily: "Nunito-Regular",
  },
});
