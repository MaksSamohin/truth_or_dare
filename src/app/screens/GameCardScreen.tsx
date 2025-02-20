import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Layout from "../../components/Layout";
import Icon from "react-native-vector-icons/Feather";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { nextPlayer, selectGamemode } from "../../store/gameSlice";
import { selectLanguage, t } from "../../store/localizationSlice";
import { gameData } from "../data/data";
import { localizedFontSize } from "../utils/helpers";

type GameCardScreenRouteProp = RouteProp<RootStackParamList, "GameCard">;

const GameCardScreen = ({ navigation }) => {
  const route = useRoute<GameCardScreenRouteProp>();
  const dispatch = useDispatch();
  const gamemode = useSelector(selectGamemode);
  const language = useSelector(selectLanguage);
  const { type } = route.params;

  const getRandomTask = () => {
    const data =
      type === "dare"
        ? gameData[language].actions[gamemode]
        : gameData[language].questions[gamemode];

    return data[Math.floor(Math.random() * data.length)];
  };

  const [taskText, setTaskText] = useState(getRandomTask());
  const [previousTaskText, setPreviousTaskText] = useState(taskText);

  const handleRefreshTask = () => {
    let newTaskText: string;
    do {
      newTaskText = getRandomTask();
    } while (newTaskText === previousTaskText);

    setTaskText(newTaskText);
    setPreviousTaskText(newTaskText);
  };
  return (
    <Layout>
      <Pressable
        onPress={() =>
          navigation.navigate("GameModes", { fromScreen: "GameCard" })
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
      <View>
        <View style={styles.card}>
          <Text style={[styles.taskText]}>{taskText}</Text>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => {
              navigation.navigate("StartGame", { fromScreen: "GameCard" });
              dispatch(nextPlayer());
            }}
          >
            <Text style={[styles.doneButtonText]}>{t("done", language)}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.downButtons}>
          <TouchableOpacity
            style={styles.downButton}
            onPress={() =>
              navigation.navigate("StartGame", { fromScreen: "GameCard" })
            }
          >
            <Image source={require("../../../assets/icons/x.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.downButton}
            onPress={handleRefreshTask}
          >
            <Image source={require("../../../assets/icons/restart.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    left: -5,
    top: 15,
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
  },
  taskText: {
    fontFamily: "Nunito-Regular",
    color: "#DDD8B8",
    fontSize: 22,
  },
  card: {
    marginTop: "35%",
    minHeight: 250,
    backgroundColor: "#542E71",
    padding: 20,
    margin: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
    borderColor: "#DDD8B8",
    borderWidth: 2,
    justifyContent: "center",
    boxShadow: "0 2 15 -1 rgba(27, 27, 27, 0.64)",
  },
  doneButton: {
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
  downButtons: {
    marginTop: 33,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 75,
  },
  downButton: {
    borderRadius: 10,
    width: 40,
    height: 40,
    backgroundColor: "#542E71",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 5 6 0 rgba(27, 27, 27, 0.34)",
  },
  doneButtonText: {
    color: "#DDD8B8",
    fontSize: 24,
  },
});

export default GameCardScreen;
