import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Icon from "react-native-vector-icons/Feather";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { gamemodes } from "../data/data";
import Svg, { Text as TextSvg } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPlayers,
  setCurrentPlayer,
  setPlayers,
  updateGamemode,
} from "../../store/gameSlice";
import { selectAllusers } from "../../store/usersSlice";
import { selectLanguage, t } from "../../store/localizationSlice";
import { translations } from "../../translations/translations";
import { localizedFontSize } from "../utils/helpers";

const GameModesScreen = ({ navigation }) => {
  const users = useSelector(selectAllusers);
  const players = useSelector(selectPlayers);
  const language = useSelector(selectLanguage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length > 0) {
      dispatch(setPlayers(users));
    }
  }, [users]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Layout>
        <Pressable onPress={() => navigation.navigate("Menu")} hitSlop={150}>
          <Icon
            style={styles.backButton}
            name="chevron-left"
            size={24}
            color="#DDD8B8"
          />
        </Pressable>
        <View
          style={[
            styles.titleContainer,
            {
              marginTop: language === "ru" ? 50 : 40,
            },
          ]}
        >
          <Text
            style={[
              styles.titleText,
              {
                fontSize: localizedFontSize(language, 24, 40),
              },
            ]}
          >
            {t("chooseGame", language)}
          </Text>
        </View>
        <View style={styles.gamemodeCards}>
          <FlatList
            data={gamemodes}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.gamemodeCard}
                onPress={() => {
                  dispatch(updateGamemode(item.id));

                  if (players.length > 0) {
                    const randomIndex = Math.floor(
                      Math.random() * players.length
                    );
                    dispatch(setCurrentPlayer(players[randomIndex]?.username));
                  }

                  navigation.navigate("StartGame", { fromScreen: "GameModes" });
                }}
              >
                <View style={styles.gamemodeCardIcon}>
                  <Image source={item.icon} />
                </View>
                <View style={styles.gamemodeCardTexts}>
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

                  <Text
                    style={[
                      styles.gamemodeCardDescription,
                      { fontSize: localizedFontSize(language, 11, 18) },
                    ]}
                  >
                    {translations[language][item.descriptionKey]}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Layout>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 45,
  },
  backButton: {
    position: "absolute",
    left: -5,
    top: 52,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 15,
  },
  titleText: {
    marginRight: 10,
    textAlign: "center",
    fontFamily: "Dongle-Regular",
    color: "#DDD8B8",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,
  },
  gamemodeCards: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  gamemodeCard: {
    backgroundColor: "#696495",
    borderRadius: 15,
    minHeight: 60,
    marginBottom: 45,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    maxWidth: 340,
    width: "100%",
    boxShadow: "0 2 10 -4 rgba(27, 27, 27, 0.64)",
  },

  gamemodeCardIcon: {
    marginLeft: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  gamemodeCardTexts: {
    marginLeft: 18,
    marginBottom: 9,
    fontFamily: "Dongle-Regular",
    flexDirection: "column",
    flexShrink: 1,
  },
  gamemodeCardName: {
    fontFamily: "Dongle-Regular",
  },
  gamemodeCardDescription: {
    fontFamily: "Dongle-Regular",
    color: "#DDD8B8",
    fontSize: 11,
    flexWrap: "wrap",
    width: "100%",
    paddingRight: 15,
  },
});
export default GameModesScreen;
